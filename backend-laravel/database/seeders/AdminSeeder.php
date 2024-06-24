<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    
        User::insert(
            [
                [
                    'name' => 'Aidouch Tilila',
                    'role' => 'mentor',
                    'email' => 'aidouch.tilila@example.com',
                    'password' => Hash::make('password')
                ],
                [
                    'name' => 'Eloudghiri Malak',
                    'role' => 'mentor',
                    'email' => 'eloudghiri.malak@example.com',
                    'password' => Hash::make('password')
                ],
                [
                    'name' => 'Rkaina Majda',
                    'role' => 'mentor',
                    'email' => 'rkaina.majda@example.com',
                    'password' => Hash::make('password')
                ],
                [
                    'name' => 'Doe Jane',
                    'role' => 'mentor',
                    'email' => 'doe.jane@example.com',
                    'password' => Hash::make('password')
                ],
                [
                    'name' => 'Brown Charlie',
                    'role' => 'mentor',
                    'email' => 'brown.charlie@example.com',
                    'password' => Hash::make('password')
                ],
                [
                    'name' => 'Johnson Emily',
                    'role' => 'mentor',
                    'email' => 'johnson.emily@example.com',
                    'password' => Hash::make('password')
                ]
            ]
                );
    }
}
