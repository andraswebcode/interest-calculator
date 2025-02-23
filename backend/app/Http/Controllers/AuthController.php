<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Login Controller
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\Response
     */

    public function login(Request $request){
        $request->validate([
			'email' => 'required|email',
			'password' => 'required'
		]);

		$email = $request->input('email');
		$password = $request->input('password');
		$user = User::where('email', $email)->first();

		if (!$user) {
			return response()->json([
				'message' => 'The email is not registered.',
			], 401);
		}

		if (!Hash::check($password, $user->password)) {
			return response()->json([
				'message' => 'The password is not match.',
			], 401);
		}

		$user->tokens()->delete();
		$token = $user->createToken('access')->plainTextToken;

        return response()->json([
            'id' => $user->id,
			'name' => $user->name,
			'email' => $user->email,
			'token' => $token
        ]);
    }
}
