(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{z5wm:function(t,e,r){"use strict";r.r(e);var n=r("L2JU");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i={created:function(){},methods:{updateSentence:function(t,e){this.$store.dispatch("calibration_support/updateValue",{key:t,value:e.target.value})},calibrate:function(){this.$store.dispatch("calibration_support/Calibrate",{})}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.b)({sentence:function(t){return t.calibration_support.sentence},calibrations:function(t){return t.calibration_support.calibrations},errors:function(t){return t.calibration_support.errors}}))},o=r("KHd+"),c=Object(o.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("文章校正")]),t._v(" "),r("p",[t._v("※文章校正支援ツールは Yahoo! JAPANで無償公開されているAPIを使用しています")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"sentence_textarea"}},[t._v("文章校正")]),t._v(" "),r("textarea",{class:[t.errors.sentence?"is-invalid":"","form-control"],attrs:{id:"sentence_textarea",rows:"10"},domProps:{value:t.sentence},on:{input:function(e){return t.updateSentence("sentence",e)}}}),t._v(" "),t.errors.sentence?t._l(t.errors.sentence,(function(e,n){return r("div",{key:n,staticClass:"invalid-feedback"},[t._v(t._s(e))])})):t._e()],2)]),t._v(" "),r("div",{staticClass:"col-6"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),r("tbody",t._l(t.calibrations,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(e.StartPos))]),t._v(" "),r("td",[t._v(t._s(e.Length))]),t._v(" "),r("td",[t._v(t._s(e.Surface))]),t._v(" "),r("td",[t._v(t._s(e.ShitekiWord))]),t._v(" "),r("td",[t._v(t._s(e.ShitekiInfo))])])})),0)])])])]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.calibrate()}}},[t._v("送信")])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("文字開始位置 ")]),t._v(" "),r("th",[t._v("文字の長さ")]),t._v(" "),r("th",[t._v("文字")]),t._v(" "),r("th",[t._v("指摘箇所")]),t._v(" "),r("th",[t._v("内容")])])])}],!1,null,"edd14a68",null);e.default=c.exports}}]);