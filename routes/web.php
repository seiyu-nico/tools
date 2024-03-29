<?php

if(config('app.env') === 'production'){
    // asset()やurl()がhttpsで生成される
    URL::forceScheme('https');
}

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any?}', fn() => view('index'))->where('any', '.+');