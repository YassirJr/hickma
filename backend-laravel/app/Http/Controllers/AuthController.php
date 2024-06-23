<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{

    public function register(RegisterUserRequest $request)
    {

        $data = $request->validated();

        DB::beginTransaction();

        User::create($data);

        DB::commit();

        return response()->json(true);
    }

    public function login(Request $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (!auth()->attempt($data)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $tokenName = config('APP_NAME', 'TOKEN_NAME');
        $token = $request->user()->createToken($tokenName, ['*']);

        return response()->json([
            'token' => $token->plainTextToken,
            'user' => [
                'id'=>$request->user()->id,
                'name' => $request->user()->name,
                'role' => $request->user()->role
            ]
        ]);
    }

    public function logout()
    {
        $user = request()->user();
        $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();

        return response()->json(true);
    }

    public function user()
    {
        $id = auth()->id();

        $user = User::with(['reservations:id,mentor_id,user_id,status,hour,link'])
            ->find($id);
        return response()->json($user);
    }

}
