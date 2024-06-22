<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReservationRequest;
use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
      public function index()
    {
        $reservations = Reservation::all();
        return response()->json($reservations);
    }

    public function store(ReservationRequest $request)
    {
         Reservation::create($request->validated());

        return response()->json(true);
    }

    public function show(Reservation $reservation)
    {
        return response()->json($reservation);
    }

    public function destroy(Reservation $reservation)
    {
        $reservation->delete();
        return response()->json(true);
    }


    public function update_status(Request $request ,$id)
    {
        Reservation::find($id)->update(['status'=>$request->status]);
        return response()->json(true);
    }
}
