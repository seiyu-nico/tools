<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Log;

class JsonController extends Controller
{
    /**
     * アン シリアライズ
     */
    public function encode(Request $request)
    {
        // ここはとりあえずこない
        $res['text'] = json_encode($request->text, JSON_PRETTY_PRINT);
        $res['msg'] = 'ok';
        return response($res, 200);
    }

    /**
     * base64_decode
     */
    public function decode(Request $request)
    {
        $res['value'] = json_encode(json_decode($request->text), JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES|JSON_PRETTY_PRINT);
        $res['msg'] = 'ok';
        return response($res, 200);
    }
}