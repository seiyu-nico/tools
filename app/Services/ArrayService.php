<?php

namespace App\Services;

use Log;

class ArrayService
{
    /**
     * 入力された配列が多次元が含まれているかどうか
     * 1つでも多次元配列があればtrueが変える
     */
    function isMulti($array) {
        $rv = array_filter($array,'is_array');
        if(count($rv)>0) {
            return true;
        } 
        return false;
    }
}