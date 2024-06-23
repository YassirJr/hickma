<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReservationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'user_id' => 'required|integer|exists:users,id',
            'mentor_id' => 'required|integer|exists:users,id',
            'status' => 'nullable|string',
//            'hour' => 'required|date_format:Y-m-d H:i:s',
            'hour' => 'required|date',
        ];
    }
}
