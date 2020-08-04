<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\QrCode\CreateRequest AS QCR;
// use QrCode;
use Log;
use Storage;
use Endroid\QrCode\ErrorCorrectionLevel;
use Endroid\QrCode\QrCode;


class QrController extends Controller
{
    public function create(QCR $request, QrCode $QrCode)
    {
        Log::info($request);
        // QRコードオブジェクトの生成
        $QrCode->setText($request->text);
        $QrCode->setSize($request->size);
        // エラー訂正レベル
        $QrCode->setErrorCorrectionLevel(ErrorCorrectionLevel::HIGH());
        // 点の色
        $QrCode->setForegroundColor($request->color);
        // 背景色
        $QrCode->setBackgroundColor($request->background_color);
        // ラベル(画像の下に表示する文言)
        // $QrCode->setLabel('My label');
        // ラベル文字のフォント
        // $QrCode->setLabelFontSize(16);

        // 画像系の処理
        $file_path = '';
        if (NULL != $request->image && $request->file('image')->isValid()) {
            $file_path = 'tmp';
            $path = $request->file("image")->store($file_path);
            // ロゴを設定
            $QrCode->setLogoPath(Storage::path($path));
            $logo_size = floor(($request->size * 30) / 100);
            // ロゴのサイズ設定
            $QrCode->setLogoSize($logo_size, $logo_size);
        }
        // ファイルに出力
        $base64_qr = base64_encode($QrCode->writeString());
        if ('' != $file_path) {
            // 画像がある場合は削除
            Storage::delete($path);
        }
        return response(['qr' => $base64_qr], 201);
    }
}
