<template>
  <div>
    <h1>便利ツール</h1>
    <div> 
      <h2 class="border-bottom border-dark my-3 h2_title">このサイトについて</h2>
      <p> 「せぃゆー」が「せぃゆー」のためだけに作っているので、レスポンス対応・追加機能はせぃゆーの気分次第で行われます。</p>

    </div>
    <div>
      <h2 class="border-bottom border-dark my-3 h2_title">利用について</h2>
      <p>当Webサイトを利用する事によって生じたあらゆる不利益または損害に対して、一切責任を負いません。</p>
      <p>当Webサイトの文書及びその内容につきまして予告なしに変更、改定、更新、中止される場合がありますので、予めご了承下さい。</p>
    </div>
    <div>
      <h2 class="border-bottom border-dark my-3 h2_title">リンクについて</h2>
      <div>
        <p>当サイトはリンクフリーです。但し、公序良俗に反したサイトからのリンクはお断り致します。</p>
      </div>
      <div>
        <p>
          <!-- リンクを貼られた際には御一報頂けますと幸いです。
          又、  -->
          当サイトから第三者のサイトにリンクを張っている場合や、第三者のサイトから当サイトにリンクを張っている場合、いずれの場合に於いても、第三者のサイトの内容は、第三者の責任で管理・運営されているものであり、それらを利用されたことによって生ずる如何なる不都合や損害についても、責任を負いかねます
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: {
      inner: process.env.MIX_APP_NAME,
      separator: '|',
      complement: 'TOPページ'
    },
    meta: [
      { name: 'description', content: '業務で利用する便利な機能が詰まったサイト。base64(エンコード/デコード), QRコード作成, json(エンコード/デコード)' },
      { property: 'og:description', content: '業務で利用する便利な機能が詰まったサイト。base64(エンコード/デコード), QRコード作成, json(エンコード/デコード)' },
      { property: 'og:title', content: 'せぃゆーの便利ツール' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://tools.seiyu-nico.jp' },
      { property: 'og:image', content: 'https://img.seiyu-nico.jp/icon/nico_icon.jpg' },
      { property: 'og:site_name', content: 'せぃゆーTools' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@seiyu_nico' },
    ]
  }
}
</script>
<style lang="sass" scoped>
.h2_title
  display: inline-block
</style>