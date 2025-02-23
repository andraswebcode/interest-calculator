<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\InterestRatesImport;

class ImportInterestRates extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:import-interest-rates {file}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import interest rates from an Excel file';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $excel_file = $this->argument('file');
        Excel::import(new InterestRatesImport, $excel_file);
        $this->info('Interest rates imported successfully!');
    }
}
