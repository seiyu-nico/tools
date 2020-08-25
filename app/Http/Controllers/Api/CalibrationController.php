<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Calibration\Request AS CR;

use App\Services\CalibrationService AS CS;
use Log;

class CalibrationController extends Controller
{
    //
    public function calibration(CR $request, CS $CS)
    {
        $post = $request->all();
        $calibrations = $CS->callApi($post['sentence']);
        $res = [
            'calibrations' => $calibrations,
        ];
        return response($res, 200);
    }

}