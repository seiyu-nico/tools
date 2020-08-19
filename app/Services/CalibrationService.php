<?php

namespace App\Services;

use Log;

class CalibrationService
{
    const APPID = 'dj00aiZpPXNHZEh2VUlJTzI1UiZzPWNvbnN1bWVyc2VjcmV0Jng9ZGQ-';
    const URL = 'https://jlp.yahooapis.jp/KouseiService/V1/kousei';

    public function callApi($sentence)
    {
        $post = array(
            'appid' => self::APPID,
            'sentence' => $sentence,
            'filter_group' => '',
            'no_filter' => '',
        );
        $curl=curl_init(self::URL);
        curl_setopt($curl, CURLOPT_POST, TRUE);
        curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($post));
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);  // オレオレ証明書対策
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);  // 
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, TRUE); // Locationヘッダを追跡
        $output = curl_exec($curl);
        $calibration = json_decode(json_encode(simplexml_load_string($output)), true);
        return $calibration;
    }

}