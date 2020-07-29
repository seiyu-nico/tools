import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexRouter from './components/Index/router';
import Base64Router from './components/Base64/router';
import SampleStringRouter from './components/SampleString/router';
import StrCountRouter from './components/StrCount/router';
import UrlEncodeRouter from './components/UrlEncode/router';
import JsonRouter from './components/Json/router';
import QrRouter from './components/Qr/router';


// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter);

// パスとコンポーネントのマッピング
const routes = [
  { ...IndexRouter, },
  { ...Base64Router, },
  { ...SampleStringRouter, },
  { ...StrCountRouter, },
  { ...UrlEncodeRouter, },
  { ...JsonRouter, },
  { ...QrRouter, },
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history', 
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router