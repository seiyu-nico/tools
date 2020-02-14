<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UrlEncodeController extends Controller
{
    //
    public function encode(Request $request)
    {
        $res = [];
        $strings = $request->all();
        foreach ($strings as $key => $val) {
            $res[$key]['encode'] = urlencode($val['decode']);
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
            $res[$key]['decode'] = urldecode($val['encode']);
        }

        return $res;
    }
}
