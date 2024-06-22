<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $adminList = [
            ['name' => 'SuperAdmin', 'email' => 'superadmin@gmail.com'],
            ['name' => 'hickma', 'email' => 'hickma@gmail.com'],
        ];

        foreach ($adminList as $admin) {
            $user = User::firstOrCreate(
                ['name' => $admin['name']],
                ['email' => $admin['email'], 'role'=>'mentor', 'password' =>'12345678']
            );

        }
    }
}
