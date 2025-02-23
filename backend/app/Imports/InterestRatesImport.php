<?php

namespace App\Imports;

use App\Models\InterestRate;
use Maatwebsite\Excel\Concerns\ToModel;
use PhpOffice\PhpSpreadsheet\Shared\Date;

class InterestRatesImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new InterestRate([
            'date' => Date::excelToDateTimeObject($row[0])->format('Y-m-d'),
            'rate' => $row[1]
        ]);
    }
}
