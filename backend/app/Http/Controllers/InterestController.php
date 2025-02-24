<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInterestRequest;
use App\Http\Requests\UpdateInterestRequest;
use App\Models\Interest;
use Carbon\Carbon;
use Maatwebsite\Excel\Facades\Excel;
use PhpOffice\PhpSpreadsheet\Shared\Date;

class InterestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInterestRequest $request)
    {
        $validated = $request->validated();
        $start_date = Carbon::parse($validated['start_date']);
        $end_date = Carbon::parse($validated['end_date']);
        $amount = floatval($validated['amount']);
        $excel_file = storage_path('app/private/alapkamat.xlsx');
        $rows = Excel::toArray([], $excel_file)[0];
        $rows = array_slice($rows, 1); // The first row contains the titles.
        $interest_rates = [];

        foreach ($rows as $row) {
            if (!empty($row[0]) && !empty($row[1])) {
                $excel_date = $row[0];  // Pl. 45560
                $date = Carbon::createFromFormat('Y-m-d', Date::excelToDateTimeObject($excel_date)->format('Y-m-d'));
                $rate = floatval(str_replace(',', '.', str_replace('%', '', $row[1])));
                $interest_rates[$date->format('Y-m-d')] = $rate;
            }
        }

        ksort($interest_rates);

        $total_interest = 0;
        $previous_date = $start_date;
        $previous_rate = null;

        foreach ($interest_rates as $date => $rate) {
            $date = Carbon::parse($date);
            if ($date < $start_date) {
                $previous_rate = $rate;
                continue;
            }
            if ($date > $end_date) {
                break;
            }
            if ($previous_rate !== null) {
                $days = $previous_date->diffInDays($date);
                $total_interest += ($amount * $previous_rate / 100) * ($days / 365);
            }
            $previous_date = $date;
            $previous_rate = $rate;
        }

        if ($previous_rate !== null) {
            $days = $previous_date->diffInDays($end_date);
            $total_interest += ($amount * $previous_rate / 100) * ($days / 365);
        }

        $interest = Interest::create([
            'start_date' => $start_date->toDateString(),
            'end_date'   => $end_date->toDateString(),
            'amount'     => $amount,
            'interest'   => round($total_interest, 2)
        ]);

        return response()->json($interest);
    }
}
