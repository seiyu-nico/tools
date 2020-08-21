<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\ArrayService;


class ArrayServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind(ArrayService::class, 'App\Services\ArrayService');
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
