<?php

namespace App\Http\Requests\Calibration;

use Illuminate\Foundation\Http\FormRequest;

class Request extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // TODO: バリデーションから
            'sentence' => 'required|max:1000',
        ];
    }
    
    public function attributes()
    {
        return [
            'sentence' => '文章 ',
        ];
    }
}
