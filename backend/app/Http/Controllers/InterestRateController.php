<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInterestRateRequest;
use App\Http\Requests\UpdateInterestRateRequest;
use App\Models\InterestRate;

class InterestRateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([]);
    }
}
