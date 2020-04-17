<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
            $decode = base64_decode($val['encode']);
            $m_code = mb_detect_encoding($decode);
            $res[$key]['decode'] = mb_convert_encoding($decode, 'utf-8', $m_code);
        }

        return $res;
    }

}
