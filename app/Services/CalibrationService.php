<?php

namespace App\Services;

use Log;
use App\Services\ArrayService AS ARS;
use GuzzleHttp\Client;

class CalibrationService
{
    // Yahoo!文章校正APIのアプリケーションID
    const APPID = 'dj00aiZpPXNHZEh2VUlJTzI1UiZzPWNvbnN1bWVyc2VjcmV0Jng9ZGQ-';
    // 対象のURL
    const URL = 'https://jlp.yahooapis.jp/KouseiService/V1/kousei';

    protected $ARS;

    public function __construct(ARS $ARS)
    {
        $this->ARS = $ARS;
    }

    public function callApi($sentence)
    {
        $calibrations = [];
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
        $xml = simplexml_load_string($xml);
        if (false == $xml) {
            // xmlがパースできない場合
            // APIに失敗しているか、直す文章がない場合
        } else {
            $xml_to_array = json_decode(json_encode($xml), true);
            $multi_flag = $this->ARS->isMulti($xml_to_array['Result']);
            if (true == $multi_flag) {
                $calibrations = $xml_to_array['Result'];
            } else {
                $calibrations[] = $xml_to_array['Result'];
            }
        }
        
        return $calibrations;
    }

}