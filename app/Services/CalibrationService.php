<?php

namespace App\Services;

use Log;
use App\Services\ArrayService AS ARS;
use GuzzleHttp\Client;

class CalibrationService
{
    const APPID = 'dj00aiZpPXNHZEh2VUlJTzI1UiZzPWNvbnN1bWVyc2VjcmV0Jng9ZGQ-';
    const URL = 'https://jlp.yahooapis.jp/KouseiService/V1/kousei';

    protected $ARS;

    public function __construct(ARS $ARS)
    {
        $this->ARS = $ARS;
        // $this->GHC = $GHC;
    }

    public function callApi($sentence)
    {
        $client = new Client();
        $options = [
            'form_params' => [
                'appid' => self::APPID,
                'sentence' => $sentence,
                'filter_group' => '',
                'no_filter' => '',
            ]
        ];
            
        $response = $client->request('POST', self::URL, $options);
        $xml = $response->getBody();
        
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