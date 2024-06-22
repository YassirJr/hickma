<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $fillable=[
        'user_id',
        'mentor_id',
        'status',
        'link',
        'hour'
    ];
       protected $casts = [
        'hour' => 'datetime',
    ];
}
