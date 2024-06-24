<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class MentorController extends Controller
{
    public function index(){
        $mentors = User::where('role' , 'mentor')->get();
        return response()->json($mentors);
    }
}
