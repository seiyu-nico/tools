<?php

namespace App\Services;

use Log;
use App\Services\ArrayService AS ARS;

class CalibrationService
{
    const APPID = 'dj00aiZpPXNHZEh2VUlJTzI1UiZzPWNvbnN1bWVyc2VjcmV0Jng9ZGQ-';
    const URL = 'https://jlp.yahooapis.jp/KouseiService/V1/kousei';

    protected $ARS;

    public function __construct(ARS $ARS)
    {
        $this->ARS = $ARS;
    }

    // public function callApi(ARS $AS, $sentence)
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
        $xml = curl_exec($curl);
        $xml_to_array = json_decode(json_encode(simplexml_load_string($xml)), true);
        $multi_flag = $this->ARS->isMulti($xml_to_array['Result']);
        if (true == $multi_flag) {
            $calibrations = $xml_to_array['Result'];
        } else {
            $calibrations[] = $xml_to_array['Result'];
        }
        return $calibrations;
    }

}