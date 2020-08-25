<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/base64-encode', 'Api\Base64Controller@encode');
Route::post('/base64-decode', 'Api\Base64Controller@decode');

Route::post('/url-encode', 'Api\UrlEncodeController@encode');
Route::post('/url-decode', 'Api\UrlEncodeController@decode');

Route::post('/json-encode', 'Api\JsonController@encode');
Route::post('/json-decode', 'Api\JsonController@decode');

Route::post('/qr', 'Api\QrController@create');

Route::post('/calibration', 'Api\CalibrationController@calibration');

