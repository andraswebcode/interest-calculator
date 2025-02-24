<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Interest extends Model
{
    /** @use HasFactory<\Database\Factories\InterestFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     * @var array<int, string>
     */

    protected $fillable = [
        'start_date',
        'end_date',
        'amount',
        'interest',
        'user_id'
    ];

    /**
	 * Get the attributes that should be cast.
	 *
	 * @return array<string, string>
	 */
	protected function casts(): array
    {
        return [
            'start_date' => 'date',
            'end_date' => 'date',
            'amount' => 'decimal:2',
            'interest' => 'decimal:2',
            'user_id' => 'integer'
        ];
    }
}
