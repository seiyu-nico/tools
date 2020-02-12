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
        $res = [];
        $strings = $request->all();
        foreach ($strings as $key => $val) {
            $res[$key]['encode'] = base64_encode($val['decode']);
            $res[$key]['decode'] = $val['decode'];
        }
        return $res;
    }

    public function decode(Request $request)
    {
        $res = [];
        $strings = $request->all();
        foreach ($strings as $key => $val) {
            $res[$key]['encode'] = $val['encode'];
            $res[$key]['decode'] = base64_decode($val['encode']);
        }

        return $res;
    }

}
