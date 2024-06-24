<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MentorController;
use App\Http\Controllers\ReservationController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['api', 'auth:sanctum'])->group(function () {
    Route::get('me', [AuthController::class, 'user']);
    Route::get('mentors', [MentorController::class, 'index']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('/user/{id}', function ($id) {
        return response()->json(User::find($id));
    });
});


Route::apiResource('reservations', ReservationController::class);
Route::post('update_status/{id}', [ReservationController::class, 'update_status']);
