<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Log;

class Base64Controller extends Controller
{
    //
    public function encode(Request $request)
    {
        Log::debug($request);
        return $request;
    }

    public function decode(Request $request)
    {
        Log::debug($request);
        return $request;
    }

}
