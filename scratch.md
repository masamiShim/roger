# Vueのまとめ
## 構文
Mustache: {{ dataで定義されてるプロパティ }}
* v-onceをつけるとデータの更新が行われない
* 生のHTMLを出す場合はv-htmlを使う(ほぼ使わんだろう)
## 双方向バインディング
v-modelディレクティブを使うと入力の内容をリアクティブに反映することができる。

## ディレクティブ
「v-」で始まる特別な属性。
単一のJavascript式を期待する。<br>
動作としては属性値の式が変化したときにリアクティブに副作用をDOMに適用する。

### 例v-bind
HTML属性内で展開する場合はこっち。真偽値の場合、null,undefined, falseの場合無視される。
※Mustacheでは使用できないので、

### 引数
ディレクティブは引数を持つことができる。「v-bind:href」など

### 修飾子
ディレクティブが特別な方法で束縛されることを示す  
例：v-on:submit.prevent →　preventDefault()を呼ぶようにする。

### 省略記法
ディレクティブを省略できる  
* v-bind:href →　:href
* v-on:click →　@click

## 算出プロパティ
### computed
リアクティブなgetterを提供する。  
キャッシュしてもよい計算で重い処理のものはcomputedの方がよい  
**※methodとの違い**  
* computedは依存するものが更新されたときのみ再評価する。変更がない場合はキャッシュから返す。
* methodは必ず再評価
#### setterも呼べるよ
fullNameの値を変更するとfirstNameとlastNameがそれぞれ変更される
```$js: 
    computed: {
        fullName: {
          get: function(){
            return this.firstName + ' ' + this.lastName
          },
          set: function(newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
          }
        }
```
## 監視プロパティ
### watch
依存する要素が多い場合、基本的には算出プロパティを使うほうが簡潔にかける。   
ただ、非同期処理などでWaiting表示したいときとか間に処理をかませたい場合はwatchで監視したほうが良い。

## クラスとスタイルのバインディング
### HTMLクラスのバインディング
真偽値でcssクラスをclassに追加するかどうか判定する
```$xslt
<div class="test" v-bind:class="{active: isActive}"></div>
```
オブジェクトでもバインドできますよ
```$xslt
<div v-bind:class="classObject"></div>
```
```$xslt
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```
何なら算出プロパティにも
```$xslt
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```
#### 配列構文(使うかな...)
### HTMLスタイルのバインディング
v-bind:styleでできる。  
自動で接頭辞もつけてくれるので楽っちゃ楽。

## 条件付きレンダリング
v-if  
v-else-if  
v-else →こいつは上記2つがないと無視される  
基本的には再利用しようとして頑張る。  
再利用したくない場合はkey属性をつける。
```$xslt
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```
### v-show
v-ifと動きは一緒  
ただ、v-showのほうはtemplateとv-elseとも連動しない  
単純にdisplayプロパティを切り替えるので常に描画されている状態

## リストレンダリング
v-for  
in の代わりに of も使える  
オブジェクトも渡せる  
index, keyも取れる  
:key の設定は必須  
* 各ノードの識別情報を追跡できるヒントを与えるため
* 既存の要素の再利用と並び替えができるように


## フォーム入力バインディング
v-model 各入力についてはリファレンス見て。  
### 修飾子
#### .lazy
#### .number
#### .trim


