<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\CalibrationService AS CS;
use Log;

class CalibrationController extends Controller
{
    //
    public function calibration(Request $request, CS $CS)
    {
        $post = $request->all();
        $calibration = $CS->callApi($post['sentence']);
        $res = [
            'calibration' => $calibration['Result'],
        ];
        return response($res, 200);
    }

}