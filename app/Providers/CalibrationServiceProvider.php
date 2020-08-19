<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\CalibrationService;


class CalibrationServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind(CalibrationService::class, 'App\Services\CalibrationService');
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
