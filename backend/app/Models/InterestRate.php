<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InterestRate extends Model
{
    /** @use HasFactory<\Database\Factories\InterestRateFactory> */
    use HasFactory;

    /**
	 * The attributes that are mass assignable.
	 *
	 * @var array<int, string>
	 */
	protected $fillable = [
        'date',
        'rate'
    ];

    /**
	 * Get the attributes that should be cast.
	 *
	 * @return array<string, string>
	 */
	protected function casts(): array
    {
        return [
            'date' => 'date',
            'rate' => 'float'
        ];
    }
}
