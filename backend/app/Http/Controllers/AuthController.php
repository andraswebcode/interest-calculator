<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * Login Controller
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\Response
     */

    public function login(Request $request){
        return response()->json([]);
    }
}
