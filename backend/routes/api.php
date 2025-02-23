<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\InterestController;
use App\Http\Controllers\InterestRateController;

Route::post('login', [AuthController::class, 'login']);

Route::get('interest-rates', [InterestRateController::class, 'index'])
->middleware('auth:sanctum');

Route::get('interests', [InterestController::class, 'index'])
->middleware('auth:sanctum');

Route::post('interests', [InterestController::class, 'store'])
->middleware('auth:sanctum');
