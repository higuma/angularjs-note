AngularJS 学習ノート
========================================================================
> (2014-07-29 .. 2014-08-29)
> 
> AngularJSの学習開始から終了までの記録ノートです。Code example(Jade + CoffeeScript + Sassに書き換えたもの)は本リポジトリのsrc/ディレクトリにあります。生成ファイルはpublic/です(一部のファイルはローカルサーバからの立ち上げが必要)。


はじめに
------------------------------------------------------------------------
まずは勉強用のドキュメントを探す必要があるが、オフィシャルWebサイトのドキュメントが充実している場合はそれを読むのが一番だと思う。

> (少し前にTwitter Bootstrapを勉強した時もそうだったが)公式オンラインドキュメントが充実しているなら絶対それを読むべき。IT分野では紙の本のほぼ全てが半年で最新の内容ではなくなり、大部分は2-3年で役に立たなくなる。
> 
> > 数年前Ruby on Railsを学ぶ際に色々な本を試したがほとんど役に立たず、結局公式ドキュメント(Rails Guides)を最初から読み直した。当時「最初からそうすればよかったのに...」と後悔した覚えがある。

現在(学習開始時)の最新は1.3.0-beta.17(間もなく1.3が正式リリースされるはず)。これから学ぶのなら最初から1.3にした方が後々問題は少ないと思う。

> (後で追加)今すぐ製品に使うのなら1.2の最終安定版の方が間違いない(古いIEをサポートする場合は必須)。参考として1.3発表時のドキュメントを読む(方針確認用)。総合的に判断して今から始めるなら1.3とした。
> 
> <http://blog.angularjs.org/2013/12/angularjs-13-new-release-approaches.html>
> 
> * (この文章を見る限り)大きな仕様変更や新機能の追加はない
> * 主な目的は現行主流ブラウザでのパフォーマンス向上
>     * 古いブラウザ(特にIE8)のサポート打ち切り
>     * 初期バージョンの(もう使われていない)APIの廃止
> 
> また1.2と1.3の細かい相違点はDevelopers Guideの[Migrating from Previous Versions](https://docs.angularjs.org/guide/migration)を参照。

和訳がある(主要ドキュメントはほぼ全て)。一つ前の版(1.2)の訳だが原文と見比べてもまだ大きな変更はなく今でも十分役に立つ(tomofさんありがとう!)。

<http://js.studio-kingdom.com/angularjs>


Home
========================================================================
<https://angularjs.org/>

Downloadボタンをクリックすると(Twitter Bootstrapの)ポップアップモーダルビューが立ち上がるが、これを見る限りCDNを使った方がいいのでみんなそうしてねと言っている感じ(実際その方が効率はよいはず)。

> でもやはり勉強用にUncompressed版のソースを取り寄せておくとよい(解読用)。800kbもあるが半分以上はコメントで読みやすい。ソースは分からなくてもコメントに目を通すだけでよい勉強になる。

この後にThe Basics以下の簡単な解説があるが、最初は読んでも説明不足(と自分の知識不足の両方)で理解するのはまず無理。スキップしてDeveloper GuideのConceptual Overviewに進むといい。

> 半日掛けて途中まで(4割くらい?)読んだところで断念した(知識もないのに無理して読んでも時間の無駄)。予備知識がないとまず理解できない。


Tutorial
========================================================================
<https://docs.angularjs.org/tutorial>

ここの構成を見ると何だか [Ruby on Rails Tutorial](http://www.railstutorial.org/book) にそっくり(製作者は実際参考にしていると思う)。中身は読まなくてもどういうものかある程度察しは付く。以前Rails Tutorialを全部実習し終えて感じたのは次の2点。

* gitやテスト(RSpec)、デプロイ(Heroku)など周辺技術の習得にはよい
* だが肝心のRailsが説明不足(結局 [Rails Guides](http://guides.rubyonrails.org/) を読まないと理解できない)

このTutorialもまだ読んでないが同じ事になりそうだ(RailsはGuidesから先に読んだ方が効率よく学べたはず)。そこから類推してやはり最初はここを飛ばしてDeveloper Guideに進む。

> Developer Guideをひと通り読み終えた後でもし必要だったら後で読む。ここから先に読んでAngular本体を理解するのはいかにも効率が悪そうだが、周辺技術(Protractorなど)を学ぶにはいいかも知れない。

> > 結局読まなかった。


Developer Guide
========================================================================
<https://docs.angularjs.org/guide>

やはりここを一生懸命読むのが定石というもの。トップページに大体の筋道がある。

* 最初の2つが最初に読むべきもの
    * Introduction (What is Angular?)
    * Conceptual Overview
* 次がTutorials(お好みに応じて...)
* Core Concepts以降が各トピック(カテゴリー別)

しかし各トピックは初心者向けもあれば上級者用もあり、ここだけを見ても始めて学ぶ人はどこから読めばいいのか分からない(この順番で読みなさいという並びではない)。

> ちなみに左サイドの目次の順序は何だか意味不明だが、実はURLパスのアルファベット順に並べられているだけ。ストーリー的な意味は全くない。

まずはIntroductionとConceptual Overviewを読む。後は自分でドキュメントを探りながら初級から上級、基礎から応用の順に読み進める。


Introduction
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/introduction>

### What is Angular?

ここには具体的なことはまだ何も書いてないので最初は和訳を流し読みする程度でいいと思う。始めたばかりの頃はどうせ読んでも分からない(実際最初に読んだときは何が何だか...)。後でConceptual Overviewを読んで「そう言えば...」と思い出せれば十分。

<http://js.studio-kingdom.com/angularjs/guide/introduction>

> 翻訳したtomofさんも意味を把握できずに苦心している様子が伺える(でも十分いい仕事してます)。どうせこういう概要説明なんてひと通り勉強し終わってから読み直した時にやっと分かるものだと思う。

### Angular Sweet Spot

それよりここが重要(勉強を始める前にまずこれを知っておかないと...)。AngularはCRUDアプリケーションを想定して作られている。データベースを使うビジネスWebアプリは"Sweet Spot"だが、高速グラフィックスを駆使するゲームには向いていない。

> 以下流してConceptual Overviewに進む。


Conceptual Overview
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/concepts>

最初はここが重要。まずは用語を覚えることが先決だが、意味はまだ分からなくていい(どうせこれから勉強する)。

> 大部分は情報処理分野の一般用語だが、Angularでは通常の(伝統的な)意味とは異なるものが多い。またJava系の用語が多いのも特徴(特にDI関係)。

* Template
* Directives
* Model
* Scope
* Expressions
* Compiler
* Filter
* View
* Data Binding
* Controller
* Dependency Injection (DI)
* Injector
* Module
* Service

ここからは適宜自分でコードを組んで確認する(後でまとめてGitHubに公開する)。

### A first example: Data binding

Angularでは(Backboneなど他のWebフレームワークと異なり)HTML自身を動的なテンプレートとして用いるのが大きな特徴。また専門用語の使い方も独特(分かりにくい原因のひとつ)。大体のイメージは次のような感じ。

* テンプレートはHTMLに独自の文法を追加して拡張したもの
* 拡張機能の記述に使う属性がディレクティブ(ng-appなど)
* 実行時にテンプレートのディレクティブを読んで解析処理するのがコンパイラ(でも通常意識しなくていい)
* コンパイラにより処理された結果のDOMがビュー(これがHTMLとしてrenderされる)
* Angularは(JavaScriptとは異なる独自の)スコープを定義する
* モデルはスコープ上のデータオブジェクト

最初なので全ソースをjadeに直してみた(分かる人にはこの方が見やすい)。

``` html
doctype
html
  head
    meta(charset="UTF-8")
    script(src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.17/angular.min.js")
  body
    div(ng-app,ng-init="qty=1;cost=2")
      b Invoice: 
      div Quantity:
        input(type="number", ng-model="qty")
      div Costs: 
        input(type="number", ng-model="cost")
      div
        b Total: 
        | {{qty * cost | currency}}
```

意味は次の通り。**まずここをよく確認すること!**

* `ng-`で始まる属性はディレクティブ
    * `ng-app` 初期化の基点を決める(この内部がAngularの処理対象)
    * `ng-init="..."` 現在のスコープで式を評価(ここでは変数定義と代入)
    * `ng-model="..."` コントロール要素(input)にモデル(ここではスコープ上の変数)を対応させる
        * これでコントロールの値が変化するとモデルに反映される
* `input`などのコントロール要素(他にselect, textarea等)も`ng-app`の内部ではディレクティブ扱いで、Angular特有の動作が追加される
    * `required`はそのオプション(未設定をエラー扱いとする): これは本来HTML5属性だがAngularはこれを検出して拡張機能(validation)を追加する
* `{{qty * cost | currency}}`は埋め込み書式(Mustache/Handlebars風)
    * 基本は`{{式}}`だが各種拡張書式がある(詳細はExpressionsやFiltersを参照)
    * ここで使っているのは`{{式 | フィルタ}}`の書式
        * 式の`qty * cost`が埋め込む(出力する)値
        * それを`currency`フィルタで変換したものを出力

まだJavaScriptコードはない。しかしこれだけで動作するのがAngularの特徴で、ng-modelディレクティブでモデル(平たく言えばデータ)を設定すると自動的にその更新が処理される。

> ここまで理解できたらもうAPIリファレンスも読める。ディレクティブのリファレンスは次の通り。リファレンスで使われている名前(内部名)はcamelCaseの`ngApp`、対応する属性(ディレクティブ)名はハイフン区切りの`ng-app`になる。
> 
> <https://docs.angularjs.org/api/ng/directive>

### Adding UI logic: Controllers

最初の例ではモデルはスコープ上の変数そのものだった(初等説明用)。より一般的にはモデルはスコープ上に生成されたオブジェクトのプロパティで、その操作にコントローラを用いる。

まずはここで用いられているパターンを把握する。テンプレートの基点は次のようになっている。

    <div ng-app="invoice1" ng-controller="InvoiceController as invoice">

パターンは次の通り。

    <div ng-app="モジュール名" ng-controller="コントローラ名 as 変数名">

* `ng-app="モジュール名"`でアプリケーションモジュールを指定
* `ng-controller="コントローラ名 as 変数名"`
    * 生成するコントローラの種類を`コントローラ名`で指定
    * スコープ上に生成したコントローラオブジェクトを`as 変数名`で設定

このパターンはこの後で出てくるDI(依存性注入)を反映したもの。Angularは全てこの方式なので最初はパターンで認識するといい(意味は理解が進むとだんだん分かってくるはず)。

> (後で追加)モジュールは「コード部品の入れ物(container)」。Angularでは用途別に色々な種類のコード(コントローラはそのひとつ)をモジュールに登録し、それを利用するのにDIを用いる。

テンプレートの内部にもいくつか新しいトピックが出てくる。

* 価格や数値などの値(モデル)は(単一変数ではなく)コントローラのプロパティ
    * `<input type="number" ng-model="invoice.qty" ...>`
* `ng-repeat`は繰り返しを表現するディレクティブ
    * `<option ng-repeat="c in invoice.currencies">{{c}}</option>`
    * → invoice.currenciesの配列要素全てに対して要素を生成する
* 今度の埋め込み書式は`{{式 | フィルタ:引数}}`の形式
    * `{{invoice.total(c) | currency:c}}`
        * 式の中でコントローラで定義したメソッド`.total`を呼び出している
        * 引数の`c`は`'USD'`などの通貨単位文字列
* イベントハンドラもディレクティブ`ng-click`で記述する
    * `<button ng-click="invoice.pay()" class="btn">`

> 見かけ上は「ビューとロジックは分離しなさい」という格言(?)に反しているように見える。でもテンプレートとコントローラは直接ではなくスコープを通して間接的に参照している(スコープが分離帯の役目を果たす)。
> 
> > というより「伝統的格言なんてもう守らなくていいでしょ」という感じ。昔とは前提条件が大きく異なるので今はもうこの方が実用的なのかも知れない。

コントローラ(レート変換と入出力)はJavaScriptで記述する。パターンは次の通り。生成するコントローラは(グローバル変数に代入したりせず)(angular.Module).controllerの第一引数(文字列)として渡す(これもDIのコンセプトに沿ったもの)。

``` javascript
angular.module('モジュール名', [ /*依存モジュール(今回はなし)*/ ])
  .controller('コントローラ名', function() {
    // コンストラクタ関数のコード
    // * thisは生成中のコントローラインスタンス
    // * コントロール要素(input等)とやり取りするデータはthisのプロパティ
    // * メソッドもthisのプロパティ
    ...
    // 終了時に戻り値付きでreturnしないこと(return thisなら可)
  })
```

> これはコントローラが内部で別のサービスを利用しない場合で、サービスを使う場合は第二引数が配列になり`['サービスID', function(サービスのインスタンス) {...}]`というパターンになる(この後で出てくる)。

この種のソースはいつもthisだらけになるのでCoffeeScriptで書き換えてみた(ついでに日本向けにJPYを追加)。かなりすっきりするが最後に一つCoffeeScript特有の注意事項がある。

``` coffeescript
angular.module('invoice1', [])
  .controller 'InvoiceController', ->
    @qty = 1
    @cost = 2
    @inCurr = 'EUR'
    @currencies = ['USD', 'EUR', 'CNY', 'JPY']
    @usdToForeignRates =
      USD: 1
      EUR: 0.74
      CNY: 6.09
      JPY: 102.6

    @total = (outCurr) -> @convertCurrency @qty * @cost, @inCurr, outCurr
    @convertCurrency = (amount, inCurr, outCurr) ->
      amount * @usdToForeignRates[outCurr] / @usdToForeignRates[inCurr]
    @pay = -> window.alert "Thanks!"
    @   # <= 注意! これを忘れると動作しない
```

内部の関数はコントローラのコンストラクタ関数定義なので、値を返すとそれがインスタンスとして置き換わってしまう。そのため戻り値なしまたはreturn thisで終了するのが正しい。

JavaScriptなら何も書かなければよいが、CoffeeScriptの場合は何も書かないと最後の式が自動的に戻り値になる。そこで@(this)を明示的に書くか、または戻り値なしのreturn(値を返さない)を使う。

> コンストラクタ内ではthisに直接メソッドを設定していることにも注意。コントローラのインスタンスは一つしか生成しない(シングルトン)。そのためわざわざprototypeに設定するメリットはない。

### View independent business logic: Services

コントローラを通貨レート変換部(サービス)と入出力部(コントローラ)の2つに分割する(これは次のステップでレート変換部にYahooのAPIを組み込むための準備にもなっている)。

ここで出てくるのが依存性注入(Dependency Injection、以下DI)で、簡単に(乱暴に?)言うとオブジェクトや関数などソフトウエアの構成部品はそれを必要としている場所にだけ「注入」するように渡す。

> 作っている人はたぶんJava EEなどに熟練した人なのだろう。自分はその方面の知識は全くないのでDIの解説ドキュメントを読んでも用語が分からない。まずは使いこなせるようになることに集中する。

今は深い事は考えず(まだそこまで理解するのは無理)、パターンを確認しておく。まず全体の流れは次の通り。隣り合ったものだけが直接やりとりを行い、テンプレートはサービスをまったく関知せずコントローラが仲立ちになる。

    テンプレート <=(スコープ)=> コントローラ(invoice2) <=> サービス(finance2)

> テンプレート/コントローラ間は直接ではなくスコープを通してやりとりする(依存性を緩和するのが目的)。

サービスとコントローラはどちらもモジュールに登録するコードだが、簡単に言えばテンプレートと直接やり取りするのがコントローラでそうでないものがサービス。書き方もよく似ているが、コンストラクタの設定に使うメソッド名が異なる。

コントローラの場合は`.controller(...)`を用いる。パターンは次の通り。今度はコントローラは(組み込みでない)サービスを利用するため、これに伴い第二引数のパターンが変化していることに注意。

``` javascript
angular.module('モジュール名', ['外部依存モジュール名'])
  .controller('コントローラ名', [
    '利用するサービス名(ファクトリーID)',
    function(生成したサービスのインスタンス) {
      // コントローラのコンストラクタコード
    }
  ]);
```

> サービスを2つ使う場合は次の通り(3つ以上も同様)。
> 
``` javascript
angular.module('モジュール名', ['サービス1', 'サービス2'])
  .controller('コントローラ名', [
    'ファクトリーID1', 'ファクトリーID2',
    function(サービス1のインスタンス, サービス2のインスタンス) {
      // コントローラのコンストラクタコード
    }
  ]);
```

サービスのインスタンスはコンストラクタ関数の引数としてだけ渡される(関数スコープ中でしか使えない)。これが「注入」の一例で、利用するサービスを文字列で指定し、そのインスタンスがコンストラクタ関数の引数になる(注入される)。

サービスのパターンは次の通り。まずメソッドが`.factory(...)`に変わるのが違いだが、ここではもうひとつ戻り値にthisではなくオブジェクトリテラルを生成してreturnしていることにも注意すること。

``` javascript
angular.module('モジュール名', [/*もしあれば外部依存モジュール*/])
  .factory('ファクトリーID', function() {
      // サービスのコンストラクタコード
      // ...
      // オブジェクトリテラルを返す
      return {
        プロパティ: 値または関数,
        ...
      };
  });
```

これらのパターンを把握すればもうコードは容易に理解できる(略)。

### Accessing the backend

最後はYahooファイナンスAPIを利用して現在の為替レートを組み込む。invoiceモジュールはそのままで(依存モジュール/サービス名を変えるだけ)、financeモジュールだけ変更すればよい(この事自体が設計上の利点)。

今度はfinanceサービスもその内部で(Angular組み込みの)$httpサービスを利用するため、factory定義部のパターンがコントローラのそれと同じ構造になる。

``` javascript
angular.module('finance3', [/*($httpはAngular組み込みなのでここは空)*/])
  .factory('currencyConverter', [
    '$http',            // $httpサービスを利用
    function($http) {   // やはりinjectionを使う
      // この中に$httpインスタンスを「注入」して利用する
    }
  ])
```

> (後で追加)`function($http)`のように関数のパラメータ名をサービス名(ID)と一致させているのは昔のDIで用いられていた方法の名残り(パラメータ名は何でもいい)。ただし合わせた方がコードが読みやすいという一面はあると思う。
> 
> > (さらに追加)スタイルガイドで「そうすべき」と主張している人を見つけたので残しておく。
> > 
> > <https://github.com/mgechev/angularjs-style-guide#controllers>

ここではYahooのAPIを利用する。Angularの勉強中なので深入りは本末転倒だが少しだけ調べてみる。ソースを見るとほとんどSQLクエリみたいだが、これはYQLと呼ばれているもの。

<https://developer.yahoo.com/yql/>

処理の流れだけ確認する。refresh(実際には起動時に一回だけ実行)の内部でURLクエリ文字列を生成し、(クロスドメインなので)JSONPを使って受信する。結果は次の通り(実際の受信結果を手動でインデントしたもの)。説明に必要な部分だけ示す。

``` json
angular.callbacks._0({
  "query": {
    ...
    "results": {
      "rate": [
        { "id": "USDUSD", "Rate": "1.00", ...  },
        { "id": "USDEUR", "Rate": "0.7467", ...  },
        ...
      ] } }
});
```

ここから次の2つの部分を抽出する。これだけ分かればソースは解読できる。

* `"id": "USDEUR",`の後ろ3文字`EUR`
* `"Rate": "0.7467",`の値`0.7467`

> 「深入りは本末転倒」って言いながら結局調べてしまった...まあこれくらいにしておこう。


Templates
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/templates>

ここも初心者向けドキュメント(本来はそのはず)で、この程度の内容はConceptual Overviewでもう十分説明している。ただしここで使われているコントローラ定義部の書式がConceptual Overviewと異なるので補足説明する。

Conceptual Overviewで用いていたディレクティブのパターンは次の通り(バージョン1.2以降)。

* `ng-controller="コントローラ as 変数"`
* `ng-model="変数.プロパティ"`

ここでの`変数`はスコープ上に生成したコントローラのインスタンスを参照し、それを記述するJavaScript側は次のように対応する。

* コンストラクタ関数内のthisは生成中のインスタンス
* モデルはコントローラインスタンスのプロパティ

一方ここで用いられているディレクティブ側のパターンは次の通り(1.1まではこの方法だけ)。変数は付けない。

* `ng-controller="コントローラ"`
* `ng-model="プロパティ"`

コントローラを記述するJavaScript側では`$scope`サービスを通じてテンプレート側を参照する(モデルは`$scope`のプロパティ)。ただしここには書かれておらず(コード例なし)、ControllersやScopesなどのトピックに記述がある。

* コンストラクタ関数で`$scope`を引数にinject
* モデルは`$scope`のプロパティ

両者の比較については次を参照(ただしかなり高度)。最終的にはasを使う記法がよいという結論なので、やはりこれから学ぶ人(つまり自分)はasを用いた記法を使うべきなのだろう。

<http://qiita.com/Quramy/items/e55ba394031794236fc9>

だがDeveloper Guideで使われているのはほぼ`$scope`の方(確認した限りではasで統一しているのはConceptual Overviewだけ)。`$scope`を使う記法もマスターしないとオフィシャルドキュメントを読むことはできない。

(後で追加)なお例文の`ng-app`ディレクティブには`="名前"`がないがこれは昔の書き方。この場合コントローラはモジュールの中ではなくグローバル関数(windowのプロパティ)として定義する(旧ドキュメント[和訳]のControllersの冒頭に例あり)。

以下古い方法は使わず、コントローラはモジュールの中に定義する。ただし一回だけ古い方法でも(まだ)使えることは確認しておく。自分でexampleを3種類作って比較のため残しておく。

* old-style: モジュールを使わない旧式の書き方
* using-scope: $scopeを使う書き方(DIはパラメータ名に記述する旧式)
* using-as: asを使う書き方(DIも最新式)


Data Binding
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/databinding>

ここも初心者向けの短いトピックなので簡単にまとめる。まず最初の"One-Way Data Binding"は多くのフレームワークで行われている方法(これはよくないというのがAngularの言い分)。

* 画面表示(描画)は自分で記述する(Backbone.jsの場合はrender)
* 更新を補助する手段は付いてないので自分で書く(本文には書いてないが例えば...)
    * コントロールのイベントハンドラは自分で設定する
    * モデルの更新が生じた場合も自分で更新メソッドを呼び出す

これらを自動化しているのがAngularで、他のフレームワークと異なりHTML全体がテンプレートであり、モデル(データ)と直結している(これがよいと主張している)。

* コントロール(input等)にはディレクティブの`ng-model`でモデルを設定
* テンプレート中に`{{式}}`で直接埋め込む
* 両者の更新は自動化されており、コントロール要素の値を変えると...
    * モデルの値を更新して
    * そのモデルを参照している埋め込み部も更新する

> 値の更新を検出して特別な処理を追加する場合はスコープに`$watch`を記述する。詳しくはScopeのトピックを参照。


HTML Compiler
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/compiler>

ここもどちらかと言えば入門編なので先に説明する。

> 本当は忘れていて終了間近になって読んだ。前半は入門編だが後半は極端に高度。

### Overview

ここは初心者用の説明。流し読みしたが特記事項なし(すでに他のトピックを読んで十分知識はある)。

### Compiler

ここから重要事項。テンプレートから最終生成物のDOMエレメントを生成するまでの処理は2フェーズで構成される。しかしここでのコンパイル(compile)とリンク(link)もAngular専用語なので注意(本来の意味と違う)。

1. コンパイル(Compile): DOMツリーを全探索してディレクティブを検出し、検出したディレクティブを処理する関数オブジェクト(リンク関数)を生成する
2. リンク(Link): コンパイルで得られた処理関数を優先度順に処理し、DOM要素とHTMLコンテント(ビュー)を生成する

> コンパイラをよく知っている人なら当然ディレクティブ探索は「文法解析(lexical analysis)」、DOM要素生成は「コード生成(code generation)」と連想する(自分ならこれしか考え付かない)。

> だがこの用語を考えた人は単に「コンパイル」は中間生成、「リンク」は最終生成だと考えている。伝統的な用語定義と照らし合わせればこの用法は正しくない。しかし意図は理解できる(言葉の意味なんて変わるもの...ここは謙虚でなければ...)。

### Directive

ここはディレクティブとはどういうものかを説明した文章だが、最初はどうせ読んでも分からない。

> 実は勉強開始のかなり早い段階で一回目を通したが全く分からずスルーしている。今(かなり勉強した後で)読むとさすがに理解できるが、Directiveを十分読みこなした後でないと無理だろう。
> 
> また「Drag ME」exampleはここだけ見ても全く理解できないが、実はDirectiveの"Creating a Directive that Adds Event Listeners"のexampleと同じもの(やはりDirectiveを勉強しないと理解は困難)。

### Understanding View

Templateにある文章と同内容(略)。

### How directives are compiled

> ここから先は高度なので最初はスキップした方がいい(今自分はDirectivesを終了してここを読んでいる)。Directivesを読んだ後にするか、またはDirectiveと同時進行で読むといい。
> 
> > もっと言ってしまうとこの文章はここよりもDirectivesの後半部に移動すべきでは?

Angularのコンパイル/リンク処理の解説。3(オプションで4)つのステップからなる(ここだけは確認しておくべき)。

1. $compileがDOMツリーを探索してディレクティブを探す(見つかったらそのインスタンスを生成)
2. コンパイル実行
    1. 見つけたディレクティブ(インスタンス)を`priority`の順に並べ替え(処理順序を決める)
    2. 優先度順に(もしメソッドが定義されていれば).compileを実行
        * DOM要素に何か(リンク前の事前)操作する場合はここを使う
        * 戻り値としてリンク関数を返す
3. リンク関数(.link)を実行
    * ここを使ってビュー(HTML要素)の最終状態を設定する
    * もしcompile/linkともメソッド定義がなければデフォルト処理を実行(ここには書いてない)
        * この場合の例がDirectiveの"Creating Directives"前半部の内容
    * (参考)本文の$watchについてはDirectiveの「Drag ME」exampleを参照(ここの説明だけでは理解しろという方が無理)
4. (Optional:通常は不要だが)もし内部に要素を作成する場合は最後にDOMの`appendChild`を使ってツリーの枝に付け加える

> 伝統的な用語定義を知っている人(特に自分みたいな年寄)は「リンク」という言葉でつまづくはず(元々の意味と相容れない)。だがAngularを作っている人達は若い(オリジナルを知らなくて当然では?)。言葉の意味なんて時とともに変わる。

#### The difference between Compile and Link

> ここから先は極めて専門的でAngularの内部動作解説に近い内容。単にWebアプリを作ろうとしている人にはほとんど関係ないような話が続く。

最初の文章はcompileとlinkの役割分担についての解説だが、実はディレクティブを作る場合ほとんどのケースはlinkしか使わない(Directiveの中にはexampleがたくさんあるが、compileを使うものはひとつもない)。

ここでの"Best Practice"は「インスタンスをたくさん生成するディレクティブを作る場合、全インスタンス共用の処理がある場合はcompileに移動した方が効率的」。でもやはりほとんどの場合はlinkで十分だと思う。

> そもそも効率重視の用途にAngularは使わないのでは?

その先はほぼngRepeatの内部動作説明(略)。

#### Understanding How Scopes Work with Transcluded Directives

ここもスキップ(ぱっとしか見てないが高度)。もし必要が生じたら読む(でもまずないと思う)。


Dependency Injection
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/di>

Dependency Injection(依存性注入:以下DI)はデザインパターンの一種。用語はMartin Fowlerによるもの。

> 最初に勉強する場合はこの先の"Dependency Annotation"だけ読めばいい。そこさえちゃんと理解すればAngularを使えるようになる。


### 本文の前に(Ruby使いから見た考察)

IDという用語の普及率は言語により大きく異なる。最も活発なのはJavaだが(WikipediaでもJavaの文例を使って説明している)、RubyではDIという言葉はまず聞かない。そこでGoogleトレンドで言語別の傾向を調べてみた。

結果は次の通り(Java/PHP/JavaScript/Python/Rubyが対象)。ものの見事に静的言語(Java)から動的言語(Ruby)の順に分布している。つまり静的な傾向の強い言語に必要なデザインパターンと考えてよい(後で補足:100%断言していい)。

[Googleトレンド: dependency injection (Java|PHP|JavaScript|Python|Ruby)](https://www.google.co.jp/trends/explore#q=dependency%20injection%20java%2C%20dependency%20injection%20php%2C%20dependency%20injection%20javascript%2C%20dependency%20injection%20python%2C%20dependency%20injection%20ruby&cmpt=q)

ちなみにRuby on RailsのDavid Heinemeier Hansson(DHH)がこんな文章を書いており、RubyにはDIは不要とはっきり言っている。

[Dependency injection is not a virtue (依存性注入は美徳ではない)](http://david.heinemeierhansson.com/2012/dependency-injection-is-not-a-virtue.html)

> Rubyについてのより詳しく具体的な例は次を参照。やはり最後に「言語の動的な性質で十分...」と結論している。
> 
> <http://d.hatena.ne.jp/kitokitoki/20110605/p1>

DHHが指摘するケースを分かりやすく説明すると、(典型的状況として)テスト時はクラスまたはモジュール(例えばHttp)をテスト用モックに差し替えて、モックオブジェクトを使って実行したい。

しかしJavaではクラスやモジュール(interface)は固定した存在で、組み込みクラスの変更は不可能だし、自分で書いたクラスを(ソース書き換えなしに)変更することもできない(これはコンパイラ言語の宿命)。

そのためJavaではプロダクトソースコード内でクラス名を直接指定しnewでオブジェクトを生成するとこれを後で差し替える手段が存在しない(ソースの書き換えが必要)。

そこで考えられたのがDIで、利用するクラスのインスタンス生成はプロダクトコード中では行わず、外部で生成したものを(典型的にはコンストラクタ引数などで)内部に渡して使わせる(これが「注入」)。これなら内部のコードは変更しなくていい。

しかしRubyではテスト用にHttpモジュールそのものを差し替えできるし、組み込みクラスへのメソッド追加/変更もできる。そのためDIという概念がそもそも必要ないというのがDHHの主張(純粋Ruby育ちの多くはDIという言葉すら知らないはず)。

ではJavaScriptはどうかというと、実はJavaScriptもRubyに負けないほどの動的言語なので、クラス(グローバルオブジェクト)のメソッド/プロパティの追加や差し替えは簡単にできる。丸ごと総入れ替えも問題ない。

> この書き方だとまるでJavaがまるで悪い言語みたいだが全くそういうつもりはない。Javaは環境に依存しない(VM上で実行する)コンパイラというのがやはり最大のメリットで、どの環境でも良好な効率を確保できる。

ではなぜAngularは全面的にDIを採用しているのかというところが興味の対象だが、そこはまだ勉強不足でよく分からない。

> 大規模開発で定評のある設計手法なので手本にしたというのがまず考えられるところだが、単にGoogleではJavaが主流派だからという理由かも...

ここでこれ以上考えても仕方がない(まずは理解しないと...)。理論はさておき使えるようになるのが先決なので本文に進む。

### DI in a Nutshell

正直言って自分はこの文章(特に冒頭部)をいくら読んでも理解できない。理由はもうはっきりしていて、何から何まで全部(たぶん)Java用語でRuby育ちの自分には単語の意味がそもそも分からない。まるでラテン語を読んでいる気分。

今はラテン語(Javaのこと...失礼かな?)を学ぶ気はないし、別に用語なんか知らなくても使い方(パターン)さえ把握すればAngularは使いこなせるはず。使い方だけ覚えてさっさと終わらせたい。

> 後半部はangular.injectの解説(今ほぼ終了して読み返しているところ)。でも本文はほとんどAngularの内部動作みたいな内容(その程度は分かる)。もっと彼らが使う用語に慣れ親しんだ後でないと真意は把握できないと思う(今だに無理)。

### Dependency Annotation

ここだけ読めばいい。Angularではモジュールやコントローラ、サービスなどを利用するための書式を統一しており、その方法(アノテーション)が書かれている(核心部)。

> Javaを知らない人にとって文章の意味が分からないのは「アノテーション」という言葉のため。Java EEでは(本来はドキュメント記述用の)アノテーションコメントを使ってDIの情報を記述することに由来していると思われる。

方法は3種類ある。それぞれ実際に簡単なコントローラのコードを作り確認する。

#### Implicit Dependencies

関数のパラメータ名に依存性(具体的にはサービス名など)を記述する。

``` javascript
var myModule = angular.module('myModule', []);

// Angular組み込みの$windowサービスをinject
var myController = function($window) {  // パラメータ名($window)の変更は禁止!
  this.greet = function(text) { $window.alert(text); };
};

myModule.controller('myController', myController);
```

この方法は簡単だがひとつ大きな欠点があり、minificationツールを使うとパラメータ名が変わってしまい動作しなくなる。そのため開発の初期段階(プロトタイピング)など短時間で簡単に仕上げたい場合を除き非推奨。

> 最初見た時「どうやって実装してるんだろう」と不思議だったが、実は単に関数オブジェクトに対してtoString()を使いパラメータ部の変数名を読み取って処理している。

#### $inject Property Annotation

Minificationツールを使っても動作するようにするには`$inject`プロパティに依存性を記述すればよい。複数ある場合は関数のパラメータ順序と`$inject`プロパティの値の配列要素順序を一致させれば動作する。

```
var myModule = angular.module('myModule', []);

var myController = function(w) {    // パラメータ名は任意でよい
  this.greet = function(text) { w.alert(text); };
};
myController.$inject = ['$window']; // ここに記述する

myModule.controller('myController', myController);
```

#### Inline Array Annotation

これがConceptual Overviewの文例で使われている方法(現在の推奨)。`$inject`を使う方法と比較するとカスケード記法との整合性に優れ、また一時変数を使わずに書く場合にも有利。最初はわざと一時変数を使って書いてみる。

``` javascript
var myModule = angular.module('myModule', []);

var myController = function(w) {
  this.greet = function(text) { w.alert(text); };
};

myModule.controller('myController', ['$window', myController]);
```

これでも動くがやはり次の方が美しい。一時変数を完全排除できるため変数名の衝突がない。

``` javascript
angular.module('myModule', [])
  .controller('myController', [
    '$window',
    function(w) {
      this.greet = function(text) { w.alert(text); };
    }
  ]);
```

> と自分は思うけれど書き方は人によってまちまち。検索するとAngularのスタイルガイドはいくつも見つかるが、それぞれ特徴があり主張も異なる。参考として残しておく(これでもほんの一部)。
> 
> <http://google-styleguide.googlecode.com/svn/trunk/angularjs-google-style.html>
> 
> <https://github.com/toddmotto/angularjs-styleguide>
> 
> <https://github.com/mgechev/angularjs-style-guide>
> 
> <http://www.johnpapa.net/angular-style-guide/>

### Where Can I Use DI?

この記法はAngularの隅々で用いられている。全て同じ書式なので以下説明略。

* ファクトリー関数(サービス) `.factory(...)`
* モジュールメソッド `.config(...)`
* コントローラ `.controller(...)`
* フィルタ、ディレクティブ、etc.

> やはりJavaライブラリ(おそらくJava EE)を手本として作ったものだろう(まず間違いない)。しかしJavaScriptに適しているかというと正直やや疑問(でも実績のある方法なので安心感はある)。文句を言う前にまずは覚えて使えるようにならないと...


Expressions
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/expression>

Angular式(Angular expression)とはテンプレートの`{{...}}`の中で用いられる書式のこと。JavaScriptに似てはいるがevalではなく専用のパーサ($parseサービス)を用いており、独自の文法規則がある。

### Angular Expressions vs. JavaScript Expressions

Angular式とJavaScriptの主な相違点。

* (windowではなく専用の)scopeオプジェクト($scope)がコンテクストになる
* undefinedとnullは何も出力しない
    * undefinedとnullのプロパティ参照もエラーにならない(やはり空文字列)
* if...elseやwhile, switchなどの制御構文はない
* フィルタを扱う機能があり、専用の書式がある

以下順番に説明する。またフィルタは専用トピックが別にあるのでそこで詳しく解説する。

### Example

2番目の例で実際にフォームにAngular式を入力して「Evaluate」ボタンでその結果を確認できる。開発中にフィルタを使う書式が必要になった時実際にどう出力されるのかをチェックするのに便利(実際に試してみるのが一番)。

### Context

Angularの式を評価するコンテクスト(スコープ)はDOM環境(window)とは異なる。ここのexampleはその説明用で、まずテンプレート側でポイントになる部分を示す。

> Developer Guideの文例はほぼ全て`$scope`を使う記法で書いてある。いちいちasを使う(新しい)記法に直すのは大変なのでこのあたりで`$scope`方式にも慣れておく。

``` html
  <button ng-click="greet()">Greet</button>
  <button ng-click="window.alert('Should not see me')">Won't greet</button>
```

* 「Greet」ボタンの`greet()`はJavaScript側の`$scope.greet()`に対応
* 「Won't Greet」ボタンの`window.alert(...)`は機能しない(Angular式がJavaScript/DOMコンテクストでないことの説明用)

JavaScriptコードは次の通り。スコープ上でDOMを参照する場合は`window`の代わりに`$window`サービスを利用(inject)する。

``` javascript
angular.module('expressionExample', [])
  .controller('ExampleController', [
    '$window', '$scope',
    function($window, $scope) {
      $scope.name = 'World';
      $scope.greet = function() { $window.alert("Hello " + $scope.name); };
    }
  ]);
```

### Forgiving

Angular式は基本的にHTML中に出力するためのものなので(console.logと異なり)undefinedやnullに対しては空文字列を出力する。またundefinedやnullのプロパティ参照はJavaScriptではエラーだがやはりAngular式では空文字列になる。

> 特にサーバ応答待ち状態を`undefined`などと出力する(あるいはエラーになる)のは実用的ではないという判断でこの仕様になっている(と書いてある)。

また本文には書いていないが、undefinedとnullは数式コンテクスト中では0として処理される。

* `{{undefined + 3}}` → `3`
* `{{3 * null}}` → `0`

### No Control Flow Statements

Angular式では制御構文(if, while等)は意図的にサポートしていない(これはビューに複雑なロジックを書くべきではないという伝統的な考え方に従ったもの)。

> ただし三項演算子なら使えるので、例えば`{{item.value < 60 ? '不合格' : '合格'}}`はOK。この程度なら「複雑なロジック」ではないと思う。

### $event

イベント処理用ディレクティブ(`ng-click`, `ng-focus`など)では`$event`をスコープに公開する。

ここでもexampleの意味が少し分かりにくいので補足する。テンプレートの次の部分に注意。`$event`は`ng-click`などイベントを扱うディレクティブでは使えるが、`{{...}}`の中に直接書いても機能しないというのが意図。

* `ng-click="clickMe($event)"`で$eventをコントローラに渡せる(機能する)
* `{{式 | json}}`はJSONフィルタ(JSONとしてparseしエスケープして出力)
* `{{$event | json}}`は機能せず結果は空文字列になる(説明用)
* `{{clickEvent | json}}`の`clickEnent`は`clickMe($event)`の出力(機能する)

### One-time binding

`{{::name}}`のように`::`で始まるAngular式は最初の一回だけ評価される(より正確には評価結果がundefinedまたはnullのうちは再評価し、値が定まったら固定)。


Filters
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/filter>

まずAngular組み込みフィルタ一覧は次の通り(こういうのを最初に書いて欲しいのだが...自分で書く)。

* currency - 数値を3桁おきにカンマを付け通貨単位を付加
* date - (Date|Number|String)を日時用にフォーマットして出力
* filter - Arrayから特定条件にマッチする要素を抽出する
* json - JavaScriptオブジェクトをJSON形式で出力
* limitTo - (Array|String)の出力長の上限を制限する
* lowercase - Stringを小文字に変換
* number - 数値の小数点桁数を指定して3桁おきにカンマを付ける
* orderBy - Arrayをソートして並べ替え
* uppercase - Stringを大文字に変換

### Using filters in view templates

テンプレートの`{{...}}`内に用いるフィルタ書式まとめ。

* 単一で引数なしの場合 `{{式 | フィルタ}}`
* 複数フィルタのチェーン `{{式 | フィルタ1 | フィルタ2 | ...}}`
* 引数付きの場合 `{{式 | フィルタ:引数1:引数2:...}}`

### Using filters in controllers, services, and directives

フィルタは通常テンプレートの`{{...}}`中で用いるが、機能をコントローラやサービスなどのモジュールから利用することも可能。ポイントは次の通り。

* `"{フィルタ名}Filter"`という名前でinjectする(dateなら`"dateFilter"`)

> `$filter`サービスを利用する方法もある(これもexampleと同機能のコードを作って確認した)。

ここでのexampleの趣旨はfilter(配列からの要素抽出)フィルタを`{{...}}`内に記述すると再評価するたびに処理するが、配列が大きくなると効率的でなくなるため事前にコントローラ側で処理しておくというもの。ポイントを示す。

* filterフィルタを使って配列から特定条件の要素を抽出するのが目的
* そこで`'filterFilter'`という名前でコントローラに注入する
* コントローラの中でそれを用い、'a'を含む要素だけ抽出する

### Creating custom filters

カスタムフィルタは(コントローラと同じ)モジュールにファクトリー関数の`.filter(...)`で記述する。次のパターンでOK(一度覚えてしまえば簡単)。`.filter(...)`と`.controller(...)`の順番は逆でもよい(lazyに処理するため順序は関係ない)。

``` javascript
angular.module(...)
  .filter('フィルタ名', function() {
    function(入力, もしあれば引数) {
      // 戻り値がフィルタ出力
    }
  })
  .controller(...以下略...)
```


Modules
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/module>

### What is a Module?

モジュールは簡単に言えばコードの入れ物。Angularではコードは必ずモジュールに登録してから利用する。

### Why?

最初はここだけ読んでもなかなか意味は分からないと思う(これから学ぶのなら今はまだ理解できなくても悲観する必要なし)。これはGoogleが作ったものなので巨大アプリケーションを作る場合を想定している。

> ごく小さく一回限りのアプリの場合にコードをわざわざモジュールに入れるのは無駄な手間だが、規模が大きくなるほど管理上のメリットが大きくなり、さらにそれを再利用する効果なども出てくる。

### The Basics

Angularではいろいろな種類(コントローラ、サービス、フィルタ、ディレクティブ、etc.)のコードをモジュールに登録してから利用する(あれ最初とほぼ同じ文章になってしまった)。ここにあるのは簡単なフィルタの例(ちょうど勉強した後なので説明略)。

### Recommended Setup

次のexampleは大規模アプリを想定した場合の構成。ここで使っている`.run(...)`はこの後に説明がある。また `.value(...)`はデータのみのコードを登録する機能。

ここでは次のパターンを把握すること。モジュールはこの依存性を辿って必要なモジュールを適切な順番で読み込む。

    angular.module(モジュール名, [依存モジュール, ...])

ここでのexampleには(普通はこんな短いコードにこういうことはしないが説明用に)合計4つのモジュールがある。テンプレートのnp-appで指定したアプリケーションモジュールから3つの依存サブモジュールを読み込んでいる。

* xmplはテンプレートの`ng-app="xmpl"`で指定されたアプリケーションモジュール
    * xmpl.service (これをアプリケーションモジュールが利用している)
    * xmpl.directive (これは説明用で中身は空)
    * xmpl.filter (同上)

### Module Loading & Dependencies

> ここから先は高度なので最初は飛ばしていい(実用的なトピックのServicesとDirectivesに進むとよい)。

ここを最初に読む人は絶対provider/injectorという用語でつまづくと思う。自分なりにできるだけ初歩的で簡潔な表現でまとめてみた(厳密でないので念のため注意)。

* provider($provide)はAngularがモジュール初期化時に(通常は内部で)用いるサービス
* injector($injector)はAngularがインスタンス利用(注入)時に(通常は内部で)用いるサービス

> 詳しくはProvidersのトピックを参照...と言いたいところだが、そこにあるべき基本事項の説明はない(`$provide`と`$injector`のリファレンスを直接読む方がまだ近道かも知れない)。

この2つが分かれば読めると思う。まとめると次の通り。

* configブロックはモジュール自身の初期化部分で、内部ではproviderと定数(.constant)だけを利用(注入)できる(インスタンスは不可)
* runブロックはインスタンス生成準備完了(injector生成)後に実行される部分で、利用(注入)できるのは定数とインスタンス(providerは不可)

以下も簡単にまとめる。

* Angularのモジュール依存解決メカニズムは(``<script>``などを用いた)JavaScriptファイル読み込みとは無関係(依存していない)
    * (RequireJSなどの非同期)ローダとの兼用も可能
    * ただしその場合初期化は自分で行う必要がある(方法はBootstrapのトピックを参照)
* 次の2つの違いに注意
    * `angular.module('foo', [...])`は新規モジュール(同名モジュールがすでにあれば上書き)
    * `angular.module('foo')`は既にあるモジュールを取得(ない場合はエラー発生)

### Unit Testing

> 最初はスキップした(今これを読んでいるのは終了間際)。ここを理解するための前提知識はUnit Testの冒頭部に書いておいた(具体的にはJasmineの知識が必要)。

ここではJasminをある程度知っているものとして、要点だけ確認する。

* JasminのSpyモックで特定のメソッドがどのように呼ばれたかチェックする
    * jasmine.createSpy(メソッド名)でオブジェクトを作成して
    * toHaveBeenCalledWith(引数)でコール時の引数が正しいか判定
* beforeEachでモックオブジェクトを準備
    * jasmine.createSpyを使い$window.alertのモックを作成
    * それを$provideに設定
* テストに使うサービスはinjectして使う(injectはangular.mock.injectの短縮形)

> 最初は全く分からなかったが、今読むと大体理解できる。


Services
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/services>

Angularにおける「サービス」という用語は(乱暴に?言えば)共有ライブラリのようなものだが、DIパターンを用いた共通インターフェースを持つのが第一の特徴。その他の特徴は次の通り。

* 遅延初期化(Lazily instantiated) - 依存性を判定し、必要になった時にインスタンスを生成する
* シングルトン(Singletons) - インスタンスは1つだけ生成し、複数が同じサービスを参照する場合は同じインスタンスを参照する

> 英単語のlazyは「だらしない」のような意味だがIT用語ではむしろ賢い意味合いで、サービスが必要になる条件を依存性から判定し、それが必要になった(ベストの)タイミングで生成する。

Angular組み込みサービスには先頭に`$`が付く。一覧は次の通り(APIリファレンスより抜粋)。

* $anchorScroll - `$location.hash`をチェックして自動スクロール
* $animate - アニメーション用
* $cacheFactory - キャッシュ機能
* $compile - テンプレートのコンパイル(内部で使われている)
* $controller - コントローラの生成(同上)
* $document - `window.document`オブジェクトのjQuery(jqLite)ラッパー
* $exceptionHandler - catchされない例外をdelegateするサービス
* $filter - フィルタをコントローラやサービス等から利用するインターフェース
* $http - XMLHttpRequest及びJSONPの処理
* $httpBackend - `$http`の内部で用いられている(自分で直接使うことは通常ない)
* $interpolate - 補間(`{{...}}`のこと)を処理する(`$compile`の補助用)
* $interval - `window.setInterval`を利用するためのサービス
* $locale - 言語/国情報(ロケールid)を`'en-us'`の形式で取得
* $location - `window.location`を利用するためのサービス
* $log - ログ出力用サービス
* $parse - Angular式のパーサ(式を引数としてそれを処理する関数を生成する)
* $q - 非同期処理([Q](https://github.com/kriskowal/q)ライブラリやjQuery Diferredに似た仕様)
* $rootElement - Angularの基点要素(通常はng-appを設定した要素)
* $rootScope - ルートスコープ(入れ子になっている場合は一番外側の親)
* $sce - Strict Contextual Escaping(文字のエスケープ機能)
* $sceDelegate - `$sce`の内部で使われている
* $templateCache - テンプレートのキャッシュ機能(Angularの内部で使用)
* $timeout - `window.setTimeout`を利用するためのサービス
* $window - DOMの`window`オブジェクトの参照

### Using a Service

最初のexampleのポイントは同じモジュール(myServiceModule)の中にコントローラ(MyController)とサービス(notify)の両方を定義していること。

* サービス(notify)はメッセージを受け付け、3回分溜まったらalertで表示する機能
* サービスのAPIはひとつしかないためその関数オブジェクトを直接返す(内部変数のmsgsはクロージャ束縛)
* コントローラではそれをinjectして利用(関数呼び出し)している
* 初期化はlazyなのでコントローラ/サービスどちらを先に定義してもよい

次に書かれているのはAngularのDIの方式についてだが、すでにDIについては詳しく調べているので簡単に示す(復習)。

* Explicit DI (現在の推奨)
* Implicit DI (関数パラメータ名に記述 - Minifyできないため非推奨)
    * 2番目のexampleは最初のexmpleをimplicit DIで書いたもの

> もうひとつ`$inject`プロパティを使う方法もある(DIのトピックを参照)。

### Creating Services

サービスの作成方法はすでにConceptual Overviewで学んでいるので、ここではポイントだけ確認する。

* Module APIの`.factory`を使う
* 書式は`.controller`と同じ(どちらもDIを用う)

### Registering a Service with $provide

> ここはProviderのトピックを参照(しかしそこにも十分な説明はないので最初から$provideのリファレンスを見た方がいいかも)。

アプリケーションを作る時に$provideを直接使う必要は通常ない(DIのアノテーション書式通りに記述すればAngularが自動的に正しく処理してくれる)。

$provideを自分で扱うのはモジュールやサービスのテスト用モックを作成する場合で、ここはその方法の簡単な説明(次にこれを実際に使う文例がある)。

### Unit Testing

ユニットテストの例。Modulesの最後にあるユニットテスト例とポイントは同じなので略。


Controllers
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/controller>

### Understanding Controllers

Angularのコントローラは`ng-controller`ディレクティブにより作成される。コントローラは(モジュール内)のコンストラクタ関数として記述する。コントローラ生成時にAngularはスコープ($scope)を生成し、DIを使ってコンストラクタ関数に渡す(injectする)。

コントローラのコンストラクタ関数の内部では$scopeの初期状態をそのプロパティに設定し、振る舞いを(やはりプロパティにメソッドを設定することにより)追加する。

その後は「コントローラですべきでないこと」の一覧。コントローラはビューと(直接...ではなく正確には$scopeを介して)やり取りする部分なので、やろうと思えばコントローラに全コードを書いて作り切ってしまうことも一応できる。

しかし本当にそうすると当然ぐちゃぐちゃなコードになる。せっかく部品(フィルタ、サービス、ディレクティブ、etc.)の作り方を用意しているのだからそれを利用しましょうということ(リストをいちいち確認しなくていい)。

### Setting up the initial state of a $scope object / Adding Behavior to a Scope Object

コンストラクタ関数の中ではビューとやり取りするデータを`$scope`のプロパティとして定義し、その初期値を設定する(これがコントロール要素から見たモデル)。同様に操作メソッドも`$scope`のプロパティに設定する。

### Using Controllers Correctly

(最初にも書いた通り)コントローラに全部押し込もうとせずサービスやフィルタ、ディレクティブなど適材適所の機能を使ってカプセル化してねということ。

### Associating Controllers with Angular Scope Objects

ここから先は例題を使った解説。

* Simple Spicy Controller Example - 基本的な方法
* Spicy Arguments Example - ここも特記事項なし
* Scope Inheritance Example - コントローラのネスト(ここは要説明)

最後のコントローラのネストだけ新しいトピックなので補足する。コントローラをネストするとスコープも入れ子になるが、その際内側のスコープは外側のスコープをプロトタイプ継承して作成される。

そのため内側のスコープではプロパティ名が見つからない場合は見つかるまで外側のプロパティを順番に参照する。3つ目のexampleはこれを説明するためのもの。

* MainController - timeOfDay('morning'), name('Nikki')を定義
    * ChildController - timeOfDayを継承('morning'のまま), name('Mattie')を再定義
        * GrandChildController - timeOfDay('evening'), name('Gingerbread Baby')とも再定義 

### Testing Controllers

> ここも最初はスキップした。Unit Testのトピックをある程度見てから読んだ方がいいが、そこにも具体的な事は書いていない(仕方ないのでUnit Testの冒頭部で必要な知識などを自分でまとめた)。

最後はユニットテストの例。コードを読んで方法だけ確認する(今回はRSpecとの類似性を中心にチェック)。

* テストでは次の2つのサービスを利用(inject)する
    * `$controller`: コントローラの手動生成
    * `$rootScope`: ルートスコープ
* `describe`はRSpecと同じ意味: テストの内容を説明してこの内部にテストを記述
    * `beforeEach`はRSpecの`before :each`と同じ(各テスト共通の前処理)
    * `beforeEach(inject(...))`の`inject`(angular.mock.inject)がポイント
    * その内側は次の通り
        * まず$rootScopeを手動生成し...
        * コントローラも$controllerで手動生成
        * $scopeとして手動生成した`$rootScope`インスタンスを注入
    * `it`がテスト項目(これもRSpecと同じ)
        * 内部の$scopeは(通常と異なり)テスト用`$rootScope`インスタンス

> ポイントはスコープやコントローラをモックに差し替えるというその一点。angular.mock.injectをこの用途で駆使するため、Angularはグローバル関数の(window.)injectをそのショートカットとして登録している。


Scopes
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/scope>

### What are Scopes?

スコープを一言で表現するなら「テンプレートとコントローラのつなぎ役」。

* テンプレート側から見るとスコープはAngular式を評価するコンテクスト
* コントローラ側では($scopeとして)injectし、そのプロパティにモデルやメソッドを記述する

#### Scope characteristics

簡単にまとめる。

* `$scope.$watch(...)`でモデルの状態変更を監視できる(ディレクティブ作成時によく使う)
    * (参考)$watchの実際の使用例はDirectivesの後半部にある
* `$scope.$apply(式)`でJavaScriptコード側からAngular式を評価できる
    * これはスコープ上で行っている評価をコード側からも使えるようにしただけ
* スコープはネストできる
    * 通常の内側(子)スコープは外側(親)スコープを継承する
    * 内側に(継承しない)分離スコープを作ることも可能(詳細はDirectives参照)
* スコープはAngular式のコンテクストを提供する

#### Scope as Data-Model

> (後で追加)ここにも$watchの説明があるが、これでは意味不明だろう(こんな中途半端な文章で分かるかい!)。実際の例がDirectivesの"Creating a Directive that Manipulates the DOM"にあり、そこのexampleを理解すれば自然と分かる。

テンプレート/スコープ/コントローラの関係は次の通り。テンプレートがコントローラを直接参照することはなく(逆も同様)、スコープが仲介役兼分離帯として機能する。

    テンプレート <=> スコープ <=> コントローラ

exampleで行っている処理を模式化すると次の通り(矢印の方向に注意)。

       テンプレート     スコープ              コントローラ
    +----------------+    +--+    +----------------------------------+
    | username <---->|<-->|..|<-->|<--> $scope.username (モデル)     |
    |                |    |  |    |                                  |
    | sayHello() ----|--->|..|--->|---> $scope.sayHello (メソッド)   |
    |                |    |  |    |                                  |
    | {{greeting}} <-|<---|..|<---|---- $scope.greeting (プロパティ) |
    +----------------+    +--+    +----------------------------------+

* (テンプレート側のng-modelで設定した)モデルは双方向
    * コントロール側から値を設定するとテンプレート側のコントロール要素に反映
    * コントロール要素を操作して値を変更すると即座に更新
    * (参考:ここでは使ってないが)更新を検出して何か処理を加える場合に.$watchを使う
* メソッドはコントローラのコンストラクタ内で$scopeに設定
    * それをテンプレート側からコールする(テンプレート → コントローラ)
    * テンプレート側で関数定義はできないため必然的に一方向
* テンプレート側のAngular式が参照するプロパティ(greeting)は自動的に監視される(コントローラ → テンプレート)
    * まずテンプレート側で`{{greeting}}`と仕掛けておく
    * .sayHelloメソッド中で$scope.greetingに値を代入すると...
    * 即座に`{{greeting}}`に反映される

#### Scope Hierarchies

最初にまとめ。

* まずAngularの実行環境が提供するルートスコープ($rootScope)がある(ひとつだけ)
* 内部でコントローラを定義すると($newにより)子スコープが生成される
* その内側でさらにコントローラを定義するとネストした子スコープを生成する
* 子スコープは親をプロトタイプ継承する
    * 子に該当するプロパティがない場合はルートに達するまで親を探索する

exampleはポイントだけ確認する。一見するとスコープのネスティングは使っていないように見えるがそうではなく、ng-repeatにより作業用子スコープが作られている。またルートスコープの説明用に一つ仕込みを入れてある。

* まずコントローラ側の方が簡単なのでそちらから確認する
    * GreetControllerでは`$scope`だけでなく`$rootScope`もinjectしていることに注意
        * そこで$rootScope.departmentを仕込んでおく(`'Angular'`)
    * ListControllerでは.namesにメンバーの一覧を設定しているだけ
* テンプレート側のポイントは最後の`<li ng-repeat="name in names">`の部分
    * `ng-repeat="name in names"`はその内部で繰り返し処理用子スコープを生成
        * 親を継承し...
        * さらに親スコープの`names`の配列要素を順番に`name`に設定
    * 式の部分にも注意: `{{name}} from {{department}}`
        * `name`はng-repeatにより順番に設定された値(メンバーの名前)
        * `department`は親を順に辿りルートスコープで見つかった値`'Angular'`

#### Retrieving Scopes from the DOM

ブラウザの開発支援機能のちょっとしたTips(Chrome devtools/FireBug共通)。

1. まずElementsを表示してinspectしたい要素を選択
2. Consoleを表示して`$0`と入力するとそのDOM要素を表示(ここまではdevtools/FireBugの機能)
3. `angular.element($0).scope()`と入力するとスコープをinspectできる

> 最後に"... or just type $scope"と書いてあるが意味不明。まさかと思い実際に`$scope`とタイプしてみたがやはりエラーになった。

#### Scope Events Propagation

スコープのイベント伝搬機能の例。説明はほとんどないがAPIリファレンスへのリンクがあるのでそこからAPIリファレンスを調べれば分かる。

<https://docs.angularjs.org/api/ng/type/$rootScope.Scope>

> どうして$scopeなどという項目がなく`$rootScope.Scope`に書かれているかというと、(子)スコープは親を動的に継承して生成しているため。JavaScriptにはクラスがないので便宜的にルートスコープの場所に記述している(でもやはり最初は探すのに苦労する)。

まとめると次の通り。

* イベントを発生(送信)するAPI
    * ($scope.)`$broadcast(name, args)` 親→子の方向に伝搬
    * ($scope.)`$emit(name, args)` 子→親の方向に伝搬
* イベントを受信するAPI
    * ($scope.)`$on(name, listener)` nameはイベント名、listenerはハンドラ関数

ここまで確認したらもうexampleは簡単に分かる。

* コントローラは1種類だけ(これを3重にネストする)
    * countがあり
    * イベントハンドラで受信時にインクリメント
* テンプレートの構成がここでのポイント
    * コントローラを3重ネストで定義(対応するスコープも3重になる)
        * ng-repeatも2つ使っているので正確には5重スコープ(ただし本質的ではない)
    * カウンタ表示は全てのレベルに付いている
    * イベント発生ボタン(`$emit`/`$broadcast`)は真ん中のレベルにだけ付いている
        * `$emit`を押すと自分自身とその親側のcountを増やす
        * `$broadcast`を押すと自分自身とその子孫のcountを増やす

#### Scope Life Cycle / Integration with the browser event loop

ここから先は(よくは確認していないがおそらく)スコープの内部動作の詳細解説。今はまだ知識不足だし読んでもあまり役には立たないのでスキップするが、後でこの情報が役立つことがあるかも知れない。

> (終了時に補足) イベントループの手順を把握していなくても特に困ることはなかった。だがちょっと複雑なことをするとたぶん何か起きるだろう(ディレクティブにpriorityがあるのはその証拠みたいなもの)。そういう時が来たら読むことにする。


Working With CSS
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/css-styling>

Angularでは(テンプレートからrenderされた)HTML要素に対して次のクラスを自動的に設定する。

* `ng-scope` 新しいスコープを定義した基点の要素に付ける
* `ng-binding` 内部に{{...}}(またはng-bind)でデータ束縛を用いている要素
* `ng-invalid` 入力要素(inputなど)でバリデーション不合格
* `ng-valid` こちらはバリデーション合格状態
* `ng-pristine` これも入力要素用(ユーザ未入力状態)
* `ng-dirty` こちらは入力後に設定される

> validation関連がまだ説明不足で、実際にChrome devtoolsやFireBugで確認すると次のようなクラスも設定される。
> 
> * `ng-untouched`は初期状態を表す。`ng-pristine`との違いはユーザが要素に触り(具体的にはクリック等)何も入力せず別の要素に移動した時`ng-untouched`は`ng-touched`に変わり`ng-pristine`はそのまま残る。
> * required属性を設定した要素には`ng-valid-required`または`ng-invalid-required`を設定する。
> * 数値入力用要素にはバリデーションの結果に応じて`ng-valid-number`または`ng-invalid-number`を設定する。
> * 他にもありそうだがこれくらいにしておく。

これらのクラスを使って入力の状態に応じてCSSで表示効果を加えることができる(というのがここの主な趣旨)。


Forms
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/forms>

(HTML要素の)コントロール(`input`, `select`, `textarea`)とそれをまとめる`form`について。

### Simple form

最初のexampleで基本事項を確認する。

* `form`にHTML5属性の`novalidate`を付けるのは(悪さをすることが多い)ブラウザのフォームバリデーションチェックを抑制するため
* 最大のポイントは`ng-model="モデル"`で、これによりフォームの値が更新されると自動的にモデルに代入される
* NameとE-mailにはrequired属性を設定(これでAngularのvalidationが有効になる)
* モデルへの代入が発生するのはvalidationをパスした場合
    * 特にE-mailはメールアドレスの形式チェックを行うことに注意(最初はinvalid)
* Genderはどちらかラジオボタンがチェックされて初めて設定される
* 下部にはform(現在のフォームの状態)とmaster(SAVEした設定)が表示される
    * .emailはvalidになると設定、またvalidからinvalidに変化すると消去される
    * .genderは値が確定するまで設定されない
* SAVEで現在のformの値をmasterにコピー、RESETはその逆
* コントローラではAPIの`angular.copy`(深いコピー)を使っている

### Using CSS classes

前のトピック(CSS)でコントロールの状態に応じてクラスが自動設定されることを学んだが、ここでそれを使う(次のスタイル設定を追加)。

``` css
.css-form input.ng-invalid.ng-dirty {
  background-color: #fa787e;    /* red */
}

.css-form input.ng-valid.ng-dirty {
  background-color: #78fa89;    /* green */
}
```

コントロールが初期値から変化した状態(.ng-dirty)で、それがvalidationをパスすれば(.ng-valid)背景は緑、パスしなければ(.ng-invalid)赤になる。

### Binding to form and control state

テンプレートでフォームやコントロールを用いると、その内部でコントローラインスタンスが生成される。モデルへの値の自動設定やCSSクラスの設定などは実はこれらが行っている。

* form要素に対しフォーム(FormController)インスタンスを生成
* (ng-model属性付き)コントロール要素に対しNgModelControllerインスタンスを生成

これらはname属性を設定することによりスコープ上に公開される(テンプレートから利用できる)。

* form要素にnameを付けるとその名前でスコープ上に公開
* コントロール要素にnameを付けるとフォームインスタンスのプロパティとして公開

ここでのexampleのポイントをまとめる。

* フォームは`name="form"`で名前を設定してスコープ上に公開
* コントロールも`name="uEmail"`と設定するとスコープ上で`form.uEmail`として参照できる
* そのプロパティをスコープ上(のディレクティブ内)で参照できる
    * 例えば入力があった場合は`form.uEmail.$dirty`が設定される
    * 詳しくはNgModelControllerのリファレンスを参照
* ここでは要素の表示/非表示を`ng-show`ディレクティブで制御
    * E-mailがinvalidの場合はメッセージを表示、validの場合は非表示
    * 「I agree」をチェックした場合だけagreeSign入力inputを表示
* ボタンも`ng-disable`で制御
    * RESETをdisableするのはデータ変化がない場合
    * SAVEをdisableするのはinvalidまたはデータ変化なしの場合

> ビューの中にロジックを書きまくっているがこうした方が効率的という判断だろう(実際その通りだと思う)。またスコープの存在がビューとロジックの混在により生じる問題を緩和している。

### Custom triggers / Non-immediate (debounced) model updates

モデルのバリデーションと値の更新はデフォルトではコントロールのvalueの更新に対して行われるが、`ng-model-options`ディレクティブで動作を変更できる。

* `ng-model-options="{ updateOn: 'default' }"` はデフォルト動作
* `ng-model-options="{ updateOn: 'blur' }"` はフォーカスが外れた時に実行
* `ng-model-options="{ updateOn: 'default blur' }"` のように複数設定可能

> 設定できるのはDOMイベント名または`default`。詳しくはngModelOptionsのAPIリファレンスを参照。

また`debounce`オプションでトリガ発生から実行までの時間(msec)を設定できる。

* `ng-model-options="{ debounce: 250 }"` (例)250msecに設定

この先はどちらもカスタムディレクティブを用いる(作成法は次のDirectivesを参照)。詳しい解析は省略し概要だけ把握しておく。

* Custom Validation - バリデーション用ディレクティブの作成例
* Implementing custom form controls (using ngModel) - カスタム入力要素ディレクティブの作成例

実際にコードも作って動作確認した。詳細は省略するが、APIリファレンスのどこを見ればよいかはちゃんと調べておく。

<https://docs.angularjs.org/api/ng/type/ngModel.NgModelController>

* Custom Validationの例で使っているのは次の2つ
    * `$setValidity(validationErrorKey, isValid)`
    * `$parsers`
* Implementing custom form controls...でのポイントは次のAPI
    * `$render()`
    * `$setViewValue(value, trigger)`


Directives
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/directive>

まずはディレクティブ一覧(API Referenceより)。最初は`ng-`で始まるものを示す。これらはHTML要素の属性(ngAppなら`ng-app`)として設定する(ngFormは要素扱い)。

* ngApp - Angularアプリケーションのルート要素を指定
* ngBind - 内部テキストに式の値を置換(通常は`{{...}}`を用いるため特殊用途)
* ngBindHtml - DOMの`.innerHTML`の機能を安全に(sanitize処理して)提供する
* ngBindTemplate - ngBindと同様、ただし置換に複数の`{{...}}`を使える
* ngBlur - blurイベントの動作をカスタマイズ
* ngChange - 入力値の変更時に式を評価(ngModelと組で用いる)
* ngChecked - `checked`属性のon/offを制御(特に連動させる場合などに用いる)
* ngClass - クラスの設定(jQueryの.addClassや.removeClassに相当)
* ngClassEven - (ngRepeatの内部で)偶数番目だけクラスを設定
* ngClassOdd - (ngRepeatの内部で)奇数番目だけクラスを設定
* ngClick - clickイベントの動作を設定(式を評価)
* ngCloak - ロード時にAngularのコンパイル完了まで表示を抑制(body要素に用いる)
* ngController - ビューにコントローラを設定
* ngCopy - copyイベントの動作をカスタマイズ
* ngCsp - CSP (Content Security Policy)を有効にする
* ngCut - cutイベントの動作をカスタマイズ
* ngDblclick - dblclickイベントの動作をカスタマイズ
* ngDisabled - ボタン要素のdisabledの設定(IE対策)
* ngFocus - focusイベントの動作をカスタマイズ
* ngForm - formと同じ(属性名ではなく要素名として設定)、ただしHTMLのformと異なりネスト可能
* ngHide - 要素の表示/非表示を制御
* ngHref - href属性を拡張(値の中に`{{...}}`を安全に展開できる)
* ngIf - 要素の挿入/削除を制御
* ngInclude - 外部からHTML(部分テンプレート)を取り込む
* ngInit - 現在のスコープで式を評価
* ngKeydown - keydownイベントの動作をカスタマイズ
* ngKeypress - keypressイベントの動作をカスタマイズ
* ngKeyup - keyupイベントの動作をカスタマイズ
* ngList - (input要素専用)デリミタ(デフォルトはカンマ)で入力をsplitする
* ngModel - コントロール要素にモデル(データ束縛)を設定
* ngModelOptions - (ngModelと組で用い)オプションを設定
* ngMousedown - mousedownイベントの動作をカスタマイズ
* ngMouseenter - mouseenterイベントの動作をカスタマイズ
* ngMouseleave - mouseleaveイベントの動作をカスタマイズ
* ngMousemove - mousemoveイベントの動作をカスタマイズ
* ngMouseover - mouseoverイベントの動作をカスタマイズ
* ngMouseup - mouseupイベントの動作をカスタマイズ
* ngNonBindable - `{{...}}`の置換を無効にする(そのまま出力させる場合に使う)
* ngOpen - (HTML5の)detail要素のopen属性を正しく設定する
* ngPaste - pasteイベントの動作をカスタマイズ
* ngPluralize - 英文の単数/複数の文章出力サポート
* ngReadonly - (input要素の)readonly属性
* ngRepeat - 繰り返し処理(必要に応じng-repeat-startとng-repeat-endを併用)
* ngSelected - selected属性を正しく設定する
* ngShow - 要素の表示/非表示を制御(ngHideと反対の動作)
* ngSrc - (img要素の)src属性を拡張(値の中に`{{...}}`を展開できる)
* ngSrcset - (img要素の)srcset属性を拡張(同上)
* ngStyle - CSSスタイル設定サポート
* ngSubmit - フォームのsubmitイベントの動作を記述
* ngSwitch - DOM構造のスイッチ機能(ng-switch, ng-switch-when, ng-switch-defaultの3つ組で用いる)
* ngTransclude - テンプレート中に別ドキュメント挿入点を設定
* ngValue - (input[selectまたはradio]で)要素選択時に設定する値の指定

また次のHTML要素はそれが`ng-app`を設定した要素の内部にある場合は自動的にディレクティブと認識され、Angularの拡張機能が設定される。

* a - `<a>`
* form - `<form>`
* input - `<input>`
* input[checkbox] - `<input type="checkbox">`
* input[dateTimeLocal] - `<input type="dateTimeLocal">`
* input[date] - `<input type="date">`
* input[email] - `<input type="email">`
* input[month] - `<input type="month">`
* input[number] - `<input type="number">`
* input[radio] - `<input type="radio">`
* input[text] - `<input type="text">`
* input[time] - `<input type="time">`
* input[url] - `<input type="url">`
* input[week] - `<input type="week">`
* script - ``<script>``
* select - `<select>`
* textarea - `<textarea>`

それぞれ詳細はリファレンス参照。

> 今リファレンスを全部流し読み終ったところ(やはり半日掛かった...こういうのはやはり一回はやっておかないと)。では本文スタート。

### What are Directives?

ディレクティブとは(HTML文法の枠内で)属性やカスタムタグなどを使ってテンプレートにAngular拡張機能を記述する書式のこと(実装はJavaScriptで記述)。起動時にAngularのHTMLコンパイラがこれを処理する。

以下の解説は自分でカスタムディレクティブを作る場合の方法が中心。組み込みディレクティブはAPI Referenceを参照。

### Matching Directives

Angularではディレクティブの(camelCaseの)内部名(例: `ngApp`)に対し、HTML上の属性または要素名として`ng-app`などを用いる。これには色々なバリエーションがある。次はその例(可能な組み合わせの一部)。

* `ng-app`
* `ng:app`
* `ng_app`
* `data-ng-app`
* `x-ng-app`

Angularは実行時にこれらをcamelCaseの内部名に変換して処理する。規則は次の通り。

* まず先頭に`x-`または`data-`があれば除去
* セパレータの`:`, `-`, `_`を認識してcamelCaseに変換

> 現在の推奨は`ng-app`(HTMLバリデーションツール対応には`data-ng-app`を推奨)。その他は後方互換対応のため残してあるもの。

#### Text and attribute bindings

次は埋め込み(補間)式の例。`{{...}}`はHTMLテキストだけでなく属性値の中にも使える。またhrefではなくng-hrefを使っている点に注意。

```
<a ng-href="img/{{username}}.jpg">Hello {{username}}!</a>
```

実はhrefでも動く。だがもしコンパイラ処理前にHTMLが表示され、直後にユーザが(未解決状態の)リンクをクリックするとデッドリンクにジャンプする。その対策がng-hrefで、解決前はクリックしてもジャンプせず、コンパイル時にhrefに正しいURLを設定する。

> しかし通常はAngularコンパイラが直後にリンク先を解決してしまうので、処理が速すぎて効果の確認は難しいだろう(巨大なテンプレートなら話は別)。でも理由を知った上で(ほぼマナーとして)ng-hrefを使うのはよいこと。

#### ngAttr attribute bindings

(ng-)hrefの場合はユーザが瞬時にクリックさえしなければエラーにはならない。しかしSVGの場合は未解決状態だとエラーになってしまうことがある。次はSVGの属性中に埋め込み書式を使った例だがこれは実際にエラーを発生する。

```
<svg>
  <circle cx="{{cx}}" cy="{{cy}}" r="{{r}}"></circle>
</svg>
```

SVGのcircle要素は円を描画する(cx, cy, rの各属性はそれぞれ中心x座標、中心x座標、半径)。しかしブラウザが最初にレンダリングする時はまだ"{{cx}}"の状態なので不正なx座標になる。

> しかしその後まもなくAngularコンパイラが属性を全部解決すると正しいSVG要素になる。(やはり巨大なSVGを除き)解決は瞬時で終わり、エラーは画面上には現れないので確認にはconsole表示が必要。

こういう場合は属性名の前に`ng-attr-`を付ける。

```
<svg>
  <circle ng-attr-cx="{{cx}}" ng-attr-cy="{{cy}}" ng-attr-r="{{r}}"></circle>
</svg>
```

* コンパイル前はcxなどの属性は存在しない(ブラウザがparse/renderしてもエラーにならない)
* コンパイラが`ng-attr-cx`を検出し、正しいcxの属性値を出力(他の属性も同様)

> 実際に動く例を作成した(GitHub repoに付属)。

### Creating Directives

ここからカスタムディレクティブの作り方。ディレクティブも(コントローラなどと同様に)DIパターンを用いてmoduleの`.directive` APIで生成する。しかしここの文章だけ読んでもファクトリー関数で何を戻り値として返せばいいか分からない。

答えは$compileサービスのリファレンスに書かれている。"Directive Definition Object"の部分を参照。この仕様に従ったディレクティブ定義オブジェクトを返す。

<https://docs.angularjs.org/api/ng/service/$compile>

> もうひとつリンク関数(link function)を返す方法もある。後でDOM操作を行うカスタムディレクティブの例が出てくるのでそこで説明する。
> 
> なお実は文章をよく確認すると「$compileにその振る舞いを知らせるオプションを持つオブジェクトを返す」というような記述がある(先頭パラグラフの最後)。しかしこれで理解しろという方が無理。

リファレンスは(やはり読みやすくはないが)説明は十分。かなりの分量だがデフォルト動作が決まっており必要な設定だけ変更すればよいようになっている。

#### Template-expanding directive

ここからしばらくテンプレート展開を使うディレクティブの例が続く。ここのexample(前半)は3段階あるが、ディレクティブ定義オブジェクトに何を記述するかという点を中心に確認する。

1. `template`プロパティだけ設定
    * テンプレート(HTML)では属性にディレクティブを使う: `<div my-customer>`
    * コードパターンは`.directive('ディレクティブ名', function() { return 定義オブジェクト })`
    * ここでのディレクティブ名はcamelCaseの`'myCustomer'`
    * 定義オブジェクトには`template`プロパティのみ設定(この部分テンプレート文字列が要素内に展開される)
2. `templateUrl`プロパティに変更
    * 今度は部分テンプレートパターンを外部ファイルから取り込む
    * `templateUrl`プロパティの値はそのファイル名
3. 要素名(カスタムタグ)としてディレクティブを定義するように変更
    * 今度はテンプレート(HTML)側は`<my-customer>`となる
    * 定義オブジェクトに`restrict`プロパティを追加する: 値の意味は次の通り
        * `'A'`: 属性名としてディレクティブを定義(デフォルト)
        * `'E'`: 要素名としてディレクティブを定義(今回はこれを使う)
        * 他に`'C'`(クラス)と`’M'`(コメント)もある
        * コンビネーション可(例:`'EA'`)

> 2番目のexample以降は外部ファイルの動的ロードを用いるため実行にはローカルサーバが必要。

#### Isolating the Scope of a Directive

前節からの続きで、分離スコープ(isolate scope)の説明が中心(ここも3段階)。分離スコープとはディレクティブがその内部で局所的に定義する作業用スコープのこと。

1. 悪い例: 2人分の情報を同じ形式で表示したいが...
    * ディレクティブ側は前節の(3)と同じ
    * しかし部分テンプレートは`{{customer.name}}`のようにプロパティ名が`customer`に固定されている
    * そこで仕方なくコントローラを人数分作って対応(これではひどい)
2. 分離スコープ(`scope`プロパティ)による解決法
    * テンプレート側は`<my-customer 分離スコープ属性名="顧客名">`
        * `<my-customer info="naomi">`
    * コード側は`scope: { 分離スコーププロパティ名: '=分離スコープ属性名' }`
        * `scope: { customerInfo: '=info' }`
    * テンプレートファイルもこれに伴い変更: `{{cutomerInfo.name}}`
    * 以上で解決できるが、さらに次の省略形がある
        * コード(ここが省略形): `scope: { customer: '=' /*'=customer'と等価*/ }`
        * この場合のテンプレートは`<my-customer customer="naomi">`
        * 外部テンプレートファイルは`{{cutomer.name}}`に戻す
3. 分離スコープの動作解説用: 意味が分かりにくいので補足説明する
    * コードは分離スコープを使用して記述
    * テンプレートファイルのポイントは次の2点
        * `customerInfo`は分離スコープのプロパティ
        * `vojta`はコントローラのスコープ(分離スコープから見ると親)のプロパティ
            * 通常の入れ子スコープは親のプロパティを継承するが...
            * 分離スコープは親スコープを継承せず独立したプロパティ名空間を持つ
    * ディレクティブは分離スコープを使っているため動作は次の通りになる
        * `customerInfo`に対してはもちろん出力する
        * `vojta`は分離スコープから見えない(何も出力しない)

> `scope`の設定は複雑怪奇なのでAPIリファレンスを参照(ただしその文章がまた難解)。

#### Creating a Directive that Manipulates the DOM

> ここに出てくるjqLiteはAngularが内部で利用しているjQuery互換(サブセット)ライブラリ。Angularより前に(オリジナルの)jQueryが読み込まれている場合はjQueryを利用し、そうでない場合はAngular付属のjqLiteを用いる。次のリファレンスを参照。
> 
> <https://docs.angularjs.org/api/ng/function/angular.element>

Angularは意図的にDOMを直接操作する作りにはなっておらず、windowやdocumentを参照するにはサービスの`$window`や`$document`をinjectする。また使用頻度の高いsetTimeoutやsetIntervalには専用の`$timeout`と`$interval`を用意している。

> 実はwindowを直接使っても動く。しかし「それだとテストの時モックに差し替えできないよね」というのがAngularの設計方針。またwindowやdocumentそのものではなくjqLiteラッパオブジェクトなのでいろいろと便利。

本格的なDOM操作を行う場合はカスタムディレクティブを作成して対応する。この記述に用いるのがリンク関数(link function)で次の書式を持つ。

* `function(scope, element, attrs[, controller, transcludeFn]) {...}`
    * `scope` Angularのスコープオブジェクト
    * `element` ディレクティブを検出したDOM要素のjqLiteラッパオブジェクト
    * `attrs` 属性オブジェクト(属性名:値の組)
    * 第4,5引数はAPIリファレンスを参照(今回は使わない)

最初のDOM操作カスタムディレクティブは毎秒の時刻を画面上に表示する時計機能。

* コントローラ側は`format`プロパティに(`date`フィルタ形式の)日付出力フォーマットを保持する
* ディレクティブ名はmyCurrentTime(テンプレート側ではmy-current-time)
* 1秒ごとの定期更新処理のため`$interval`サービスをinject
* 出力に`date`フィルタを使うためサービスIDを`dateFilter`としてinject
* リンク関数を記述し、その中でインターバル処理を仕掛ける
    * 引数は`(スコープ, 要素, 属性)`まで使う
    * 内部変数は3つ(クロージャ束縛)
        * format: dateフィルタ形式のフォーマット文字列
        * updateTime: インターバル処理関数
        * timeoutId: 設定したインターバル処理のID(cleanup時に必要)
    * updateTimeで現在時刻を表示(ここでdateFilterを利用する)
    * `.$watch`で値の更新を監視(変更したら時刻表示を更新)
    * `$destroy`イベントを検出し、そこでインターバル処理を除去(cleanup)
    * 以上で用意が完了したので$intervalを仕掛ける
* ファクトリ関数の戻り値はディレクティブ定義オブジェクト
    * プロパティはひとつしかないため`return { link: リンク関数 };`となる
    * この場合は単に`return リンク関数;`でもよい

これで全体の流れは分かるが、詳しくはAPIリファレンスを読む必要があるので場所だけ確認する(もういちいち書くのはやめ)。

* `$interval` <https://docs.angularjs.org/api/ng/service/$interval>
* `date`フィルタ <https://docs.angularjs.org/api/ng/filter/date>
* `element` <https://docs.angularjs.org/api/ng/function/angular.element>
* `.$watch`と`$destroy` <https://docs.angularjs.org/api/ng/type/$rootScope.Scope>

#### Creating a Directive that Wraps Other Elements

ここはng-transcludeディレクティブを使う例。まず基本事項を確認(なるほど、これはRubyのコードブロックみたいなものか...)。

* コード(script.js)
    * コントローラでは`$scope.name`だけ設定
    * .directiveでは次を設定
        * 要素として定義 `restrict: 'E'`
        * `transclude: true`(ng-transcludeの内部に展開)
        * テンプレートの場所を指定 `templateUrl: 'my-dialog.html'`
        * リンク関数の中でscope.nameを設定(説明用): しかしtranscludeの場合は効かない
* 子テンプレート(my-dialog.html)
    * ここで`<div ng-transclude>`を使っている(中身は書かない)
* 親テンプレート(index.html)
    * `<my-dialog>`の中に書いたものが子テンプレートの`<div ng-transclude>`の中に展開される(Rubyの`yield`文に対応)

> ここでも用語が独特なのが分かりにくい理由(これでは入口でつまづく)。"transclude"(かっこ付け過ぎでは?)より単に"block"等の方がずっと多くの人に理解してもらえるはず。
> 
> > ちなみにJadeにはmixinという類似機能があり、子テンプレート中で親(呼び出し元)から子(mixin)に渡す部分HTMLの挿入場所に"block"を使う(おそらくRubyからの類推)。こちらはとても理解しやすい(これが上記文書を書いた理由)。
> > 
> > > Rubyの"yield"でなくもっと平易(初歩的)な"block"にしたのが秀逸だと思う。

リンク関数の中で(わざと機能しない)scope.nameを設定しているのはスコープの説明用。ng-transcludeもやはり作業用スコープを作るが、親テンプレート側のコンテクストを使って埋め込みを行えるようにしている(推定)。

> ドキュメントの文章が非常に難解で、特にAPIリファレンスはまるで理解不能。上記解釈は使用法から逆に考えて最も合理的な仕様は何なのか自分で推定したもの(文章読解は断念した:この解釈で合ってると思うが...)。

その次は応用例(ダイアログに"close"ボタンを付ける)。ここはポイントだけ確認する(しかしなぜこんなに難解になってしまうのか...)。

* メインテンプレートでは`my-dialog`の部分が全て
    * `ng-hide="dialogIsHidden"` のng-hideはAngular組み込みディレクティブ
        * dialogIsHiddenの真偽値で表示/非表示をコントロールする
    * `on-close="hideDialog()"`は後で説明
    * 内部の`Check out the contents, {{name}}!`が子テンプレートに渡される
* コントローラのコードは次の通り
    * .dialogIsHiddenフラグを設定
    * .hideDialogメソッドを定義(一旦消して2秒後に復活)
* ディレクティブのコードでは`scope`の設定に注意(難解:リファレンスとコードを見比べないと理解困難)
    * ここで使っているのはAPIリファレンス中の`&attr`の形式
    * `scope: { 'close': '&onClose' }`の意味は次の通り
        * `'close'`は子テンプレートで呼び出す関数名
            * `ng-click="close()"`の部分に対応
        * `'&onClose'`はこれに対応する親テンプレート側ディレクティブ
            * `on-close="hideDialog()"`の部分に対応
    * 動作は次の通り(ここがまとめポイント - やっと全部つながった...)
        * (イベント発生)子の`ng-click="close()"`に対して...
        * `'close': '&onClose'`を通じて...
        * 親の`on-close="hideDialog()"`を評価し...
        * これによりhideDialog()が実行される(解決)

> 何とか遭難せずに最初のng-clickから最後のhideDialogまでつなぎ合わせることができたが、それにしてもぜこんなに難解なのか。これでは何だか基本設計に問題あり?...いやまだ勉強中なのでやめておこう。

#### Creating a Directive that Adds Event Listeners

ここは常識の範囲内で分かる内容だが、やはりcode exampleがあるのはとても助かる(理解するのは簡単だが、自分で最初から作ろうとするとたくさんの調べ物が必要)。

コードは簡単に読める(難しいことは何もない)。ただし一箇所だけコードに特別な意図があるので確認する(最初は分からなかった)。

* mousedownはelement自身が受け取る(これは当然)
* しかしmousemoveとmouseupは(injectした)$documentに受信させている
* 普通に考えればこれらもelementに受信させればいいように思える
    * 実際にそういうコードを作って確認したが単独なら問題ない
* だが「Drag ME」を2つ並べると問題が分かる(なるほど!)

これは意外と奥が深かった。要素がひとつの場合は(たぶん)問題ないが、複数作成してmousemoveとmouseupをelement自身で受信すると次のケースで問題が発生する。

* 「Drag ME」を2つ作成
* 最初の方をdragしてもう片方に重ねると、表側にある方がマウスイベントを受信してしまいドラッグ中の要素に届かなくなる(動作不良になる)
* そこでドラッグ中はmousemove/mouseupを$documentで受ける(これで安全)

> 実際に両方例を作って動作確認を行った(これはAngularに限らない一般的な問題)。しかし思わぬところに落とし穴があるものだ...

#### Creating Directives that Communicate

最後はタブコントロールだが、これはさすがに詳細は省略する(jQuery UIやTwitter Bootstrapなど既存ライブラリのタブコントロールは色々ある)。コードの説明ポイントだけ簡単に確認しておく。

* 親(myTabs)
    * `controller`にこのディレクティブ内で使うコントローラを記述する
* 子(myPane)
    * `require`でリンク関数の第4引数にコントローラを渡すことができる
        * `myTabs`だと現在位置のコントローラmyTabs(しかしこれではなく...)
        * `^myTabs`とすると親要素のmyTabsを検索する(これを使っている)
        * リンク関数の第4引数に親のコントローラが渡される
            * リンク関数中でcontroller.addPaneを呼び出し自分を登録する

> ここまで読めばもう自分で色々作れるし、「Angularなら知ってるよ」と言っても差し支えないだろう。ここから先は応用編とテスト。


Providers
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/providers>

ここを読み始める前に$injectorサービスのAPIリファレンスに目を通しておく(でないと読むのは厳しそう)。

<https://docs.angularjs.org/api/auto/service/$injector>

> やはり(もう元々の英語の意味と無関係になっている)annotationなどのJava用語を補足説明なしで使いまくっている(Javaくらい知ってて当然だろと言わんばかり)。Javaを知らない自分にはかなりの苦痛。

詳しいことは分からない(英語は問題ないはずの自分もここまで用語が分からないと知らない外国語を読んでるようなもの...)。モジュールからコードを取り出してそれを使う場所に送る(injectする)ときに使うものくらいに理解しておく。

本題に進むが、この本文を順番に一生懸命読んでも疲れるだけだと思う。ここよりもむしろ$provideのAPIリファレンスを直接読んだ方が分かりやすい。

<https://docs.angularjs.org/api/auto/service/$provide>

ここの先頭部がよくまとまっている(やや自分勝手に「意訳」した)。

* `provider`が汎用(以下すべてこれを特定用途にカスタマイズしたもの)
* `constant`はデータ供給用 - (定数なので)provider/service両方から利用可能
* `value`もデータ供給用 - (変数なので)serviceのみ利用可能(providerからは不可)
* `factory`はサービスの定義用(通常はこちらを使う)
* `service`もサービス定義用(コンストラクタで設定する点が異なる)

実際にはこれらを直接使うのではなく、この機能を取り込んだangular.Moduleを通じて利用する(`angular.module(...).factory(...)`のような書き方はこれを用いたもの)。

<https://docs.angularjs.org/api/ng/type/angular.Module>

> `$provide`をアプリケーションコードで使うことはあまりない(DIのアノテーション通りに書けば自動的に処理される)。`$provide`はテスト用モックを作る場合に必要で、ModulesとServicesのトピックの最後に`$provide`を使ったユニットテストの文例がある。
> 
> これ以上詳しく読んでも得るものは少ないと思う(それにどうしてもJavaの論理でJavaScriptを語っている感じがしてしまう)。先に進んでさっさと終わらせよう。


Using $location
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/$location>

本題に入る前に本文のHashbangモードやHTML5モードとは何なのかきちんとまとめておく(以前勉強したがかなり忘れているので復習)。

Ajaxを使うWebアプリケーションではユーザが操作を行っても別のページ(URL)に遷移せず、JavaScriptがXHRによりサーバと直接交信し応答結果を画面に更新する。

しかしこれだけだとユーザ操作によりアプリケーションの状態が変化してもブラウザはそのことを認識しない。ユーザ操作はブラウザ履歴に残らないし、リロードしたら初期状態に戻ってしまう。

そこで最初はハッシュを使う方法が考えられた。もともとURLの'#'から後の部分(これが通称「ハッシュ」)はページ内遷移用で、例えば`http://www.example.com#overview`というURLは`www.example.com`のホームページで`id="overview"`の要素を指す。

ハッシュを変更してもブラウザはサーバにアクセスせず、該当するIDの要素を探してもしあればそこにジャンプする。一方でハッシュはURLの一部と認識されるためその変更はブラウザの履歴に記録される。

この元々の仕様を利用(流用)したのがhashbangと呼ばれる方法で、ハッシュをアプリケーションの状態を表現するために利用する(設定すればブラウザ履歴に残る)。外部から設定(リコール)された場合はJavaScriptでhashchangeイベントを検出して処理する。

------------------------------------------------------------------------

(以下は興味のある人専用 - Hashbang栄枯盛衰物語?)

Hashbangという名前の由来は先頭のパターンに`#!...`を使うことが多いため。これはUnixスクリプトの先頭行(shebang)と同じ文字の組み合わせなので自然とこの名前になったようだ。本来なら`#...`でいいのにあえて`#!...`を使うのには理由がある。

URLのハッシュは元々ページ内の位置を表現するものなので、Googlebotのようなクローラはこれを探索の(より分かりやすく言い直せばサーチエンジンがデータ収集する)対象とは見なさない(少なくとも昔はそうだった)。

これはSEOの観点から見ると困った状況で、特定のURLに誘導したくてHTML中にそれを記述した場合、Ajaxアプリケーションではハッシュの先にある部分が重要なのにクローラがそれを検索対象にしてくれない。

Ajaxの普及とともにこれが問題となり、Googleはハッシュが`#!....`で始まるURLはクローラの検索対象とする「クロール可能なAjaxサイト」の仕様を作った。

<https://developers.google.com/webmasters/ajax-crawling/>

> Googleは「うちは`#!`で始まるなら収集します」と宣言し、クロールしてほしいサイトはGoogleが要求する確認手段(`_escaped_fragment_`への応答)を実装することで両者の利益になるというストーリー。だがこれが反感を買う理由になった一面もあると思う。

一時期これが大流行し、3-4年前はTwitterやFacebookを始め多くのサイトが`#!...`で溢れていたらしい(今はもう思い出せない)。だがこれが反対派の恰好の攻撃対象になったようだ。当時の経緯は次を参照(色々と読んだがこれが一番詳しい)。

<http://d.hatena.ne.jp/karasuyamatengu/20110212/1297465199>

しかしhashbangは従来技術を流用したもの(あくまで応急措置)なので、現在は新しく策定されたHTML5のhistory APIが主流になりつつある(これが本文のHTML5 mode)。昔の論争も時とともに収束に向かっている。

-------------------------------------------------------------------------

ここからはHTML5のhistory APIについて。まずは正式仕様のURL(参考 - 自分は読んでない)。

<http://www.w3.org/TR/html5/browsers.html#the-history-interface>

<http://www.whatwg.org/specs/web-apps/current-work/multipage/browsers.html#history>

やはりMozillaのドキュメントが読みやすい。和訳もある。

<https://developer.mozilla.org/ja/docs/Web/Guide/DOM/Manipulating_the_browser_history>

APIを要約する。

* `(window.)history`でブラウザの状態を管理する(スタック)
* `history.pushState(state, title, url)`で状態を記録(追加)
    * stateは状態保存用の任意のオブジェクト
        * 設定後は`history.state`でリード可能
        * JSONにシリアライズして保存するため上限あり(640000文字)
    * titleは今のところ未使用(空文字列にするのが確実)
    * urlは(same originである限り)自由にパスを設定できる(ここが一番の違い)
* `history.replaceState(...)`は同機能だが現在の状態を更新する点が異なる
* 状態の移動は次のAPIを用いる
    * `history.forward()`
    * `history.back()`
    * `history.go(offset)`
        * `history.go(-1)`は`history.back()`と同じ
        * `history.go(1)`は`history.forward()`と同じ
* 状態が変更されるとwindowにpopstateイベントが発行され、history.stateに保存した設定が復元される

従来との一番の違いはURLをパスまで自由に設定できる点(ただしsame originであることが条件)。これでURLは(今までとルールが変わり)パスの部分を状態表現のために利用できる。

> ハッシュではなく堂々とパスの中に記述できるため、クローラに対してそのURLを通常と同じように収集してもらえることを期待できる。

問題点はまだ完全には普及していないこと。主要ブラウザの対応状況は次の通りで、IEは10でやっと使えるようになった(あと2-3年もすれば落ち着くはず)。

<http://caniuse.com/#feat=history>

> 事前説明は以上(ここからやっとAngularの$locationの説明)。本文はほとんど読んでいない(横目で見ながらAPIリファレンスとソースを読んで書いた)。

`$location`は基本的にはwindow.locationの機能を提供するAngularのサービスだが、hashbangやhistory APIを組み込んでWebアプリケーション状態をパスで表現する機能を統合している。

`$location`にはコンフィギュレーション用の`$locationProvider`サービスがあり、それを使って設定する。

``` javascript
angular.module('アプリケーションモジュール名', [...])
  .config(['$locationProvider, function($locationProvider) {
    $locationProvider       // 設定項目は次の2つだけ
      .html5Mode(true)      // false(デフォルト)はhashbangモード
      .hashPrefix('!');     // #!...を使う場合の設定例(デフォルトは'')
  }])
```

この後で$locationサービスをDIアノテーションでinjectして利用すればよい。

以下は$locationのAPIリファレンス要約。まずgetterメソッドを全部まとめて示す(全て引数なし - このうちのいくつかは引数を設定するとsetterになる)。

* `.absUrl()` 完全なURL → `'http://www.example.com/foo?a=b&c=d#xyz'`
* `.url()` パス以降のURL → `'/foo?a=b&c=d#xyz'`
* `.protocol()` プロトコル → `'http'`
* `.host()` ホスト名 → `'www.example.com'`
* `.port()` ポート番号 → `80`
* `.path()` パス → `'/foo'`
* `.search()` クエリ → `{ a: 'b', c: 'd' }`
* `.hash()` ハッシュ → `'xyz'`

次はsetter一覧。これらは全てカスケード呼び出しできるよう戻り値として$locationのインスタンスを返す。

* `.url(url, [replace])` パス以降のURLを設定
* `.path(path)` パスを設定
* `.search(search, [value])` クエリを設定(呼び出し書式に各種バリエーションあり)
    * `.search('p=q')`
    * `.search('p', 'q')`
    * `.search({p: 'q'})`
* `.hash(hash)` ハッシュを設定
* `replace()` 履歴を書き換え更新(HTML5モードではhistory.replaceStateをコール)

最後はイベント。意味は名前通りなので説明略。これらはルートスコープから子孫に伝搬する(broadcast)。

* `$locationChangeStart`
* `$locationChangeSuccess`

> broadcastとemitの違いはScopesの"Scope Events Propagation"を参照。

ここにはexampleが2つあるが(HTML5/hashbang各モードのデモ)、addressBar.jsとfakeBrowser.jsに使われている$browserはAPIリファレンスのどこにも記述はない。これはAngularの非公開サービスで、コメント付きソースを読むと存在を確認できる。

`$browser`は「抽象(模擬)ブラウザ」のようなものらしい。コメントには"used only by scenario runner"と記述があるが(これだけならテスト専用)、現状では`$locationPovider`の内部実装にも用いられている(実際にinjectされている)。

なおscenario runnerとは旧式テストツールで、現在はProtractorを用いる(E2E Testing参照)。つまり$browserは非公開なだけでなく、将来のバージョンで廃止されることが予想されるので詳しい調査はしない。

> おかげでかなりソースを読むはめになった。他にもうひとつ`$sniffer`という非公開サービスがあり、こちらはブラウザ判定(browser sniffing)用でソースも短い。特に難しくないので読めば使用法もだいたい分かる。

しかしexampleはモックブラウザの環境上に擬似アドレスバーがあるような状態なので、これでは逆に自分のような初心者には動作の理解の妨げにしかなっていない。そこで本物のブラウザのアドレスバーとやりとりするように自分で作り直した。

* public/
    * location/
        * 01-html5-fake/ - 本文の「偽アドレスバー」バージョン(HTML5モード)
        * 02-hashbang-fake/ - 同上(hashbangモード)
        * 03-html5-real/ - 実際のブラウザのアドレスバーで操作(HTML5モード)
        * 04-hashbang-real/ - 同上(hashbangモード)

後半は注意点の解説だがさすがに疲れたので省略する。基本はもう全て把握できたと思う(残りは細かい注意事項だけ)。実際に使うときになったら読んで確認すればいい。


i18n and l10n
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/i18n>

念のため確認するとi18nはinternationalization、l10nはlocalizationの略。本文の冒頭で一応両者の違いを説明しているが、実際には自分も含め皆あまり区別してないのでは?(プログラマの立場ではそんなに厳密に区別しても実用的な意味はないと思う)。

### How does Angular support i18n/l10n?

Angularがサポートするi18n/l10n機能一覧。

* フィルタ: date, number, currency
* ディレクティブ: ngPluralizeを用意(en-US専用)
* サービス: $localサービスでブラウザのロケールIDを取得

### What is a locale ID?

ロケールIDは言語コードと国コードの組み合わせで表現する(en-USやja-JPなど)。

> たぶん[RFC 3282](http://tools.ietf.org/html/rfc3282)に従ったもの。

### Supported locales in Angular

日付の表示や通貨単位などの違いによるロケール対応は別ファイルとして用意している。一覧は次の通り。言語と国両方の組み合わせはかなり膨大だが、angular-locale\_fr.jsのように言語だけで指定したものもある。

<https://github.com/angular/angular.js/tree/master/src/ngLocale>

日本語対応版は次のファイル(ja-jp)。他にjaのみのファイルもある(たぶん内容は同じ)。

<https://github.com/angular/angular.js/blob/master/src/ngLocale/angular-locale_ja-jp.js>

### Providing locale rules to Angular

これらのファイルをangular.jsの後に読み込めばよい。方法はいくらでもあるが、ここに書いてあるのは2通り。

1. angular.jsの後ろにlocaleファイルをmergeしてしまう
2. scriptタグを使う

> ただし中身は通貨単位と時刻表現のデフォルト設定くらいのもの。特定の国向けにカスタマイズする場合はこれらを利用するよりフィルタを使う際に引数で直接設定した方が確実だと思う。

### Caveats

注意点を3つ。

1. currencyフィルタ
    * デフォルト設定ではブラウザ環境から検出したlocaleの通貨単位を使う
    * そのため別の国で使うと通貨単位記号が変わる(これは困る)
    * 引数で設定すればよい: e.g. `{{price | currency:"￥"}}`
2. dateフィルタ
    * これも検出したlocaleに応じて表示が変わる(これ自体はよいことだが...)
    * 言語と国によって表示長は大きく異なる(具体的には幅のはみ出しに注意)
3. タイムゾーン(Angularと関係ない話だが...)
    * dateフィルタで出力する時刻はブラウザのlocaltimeに対するもの
    * そのため(UTCで)同じ時刻でも地域によって出力される時刻表現は異なる

> 最後の「JavaScript/Angularとも開発者が指定するタイムゾーンでの日時表示をサポートしていない」は本当だが、自分でプログラミングすれば実現可能(経験あり)。


Bootstrap
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/bootstrap>

Angularの起動時動作説明。通常は特に知らなくてもいいがそんなに難しくないので読んでしまう。

### Angular &lt;script&gt; Tag

特記事項は特にないので簡単にまとめる。

* 読み込み位置はheadでもいいが、bodyの最後がおすすめ(最近はこの方がポピュラー)
* 後は古いIEの対応について(IE専用セクションが別にあるので略)

### Automatic Initialization

通常Angularが行う初期化動作の説明(特別な事を行わないのなら気にしなくいい)。

* まず`document.readyState`をチェックして'complete'になったら初期化を実行(これがあるため``<script>``の位置はどこでもいい)
* 大まかな手順は次の通り(通常は特に知らなくていいと思う)
    * まず`ng-app`ディレクティブを検索
    * 見つかったら(ngApp)モジュールをロード
    * injectorを生成
    * ng-appから先をコンパイル

### Manual Initialization

手動での初期化は何か特別な事をする場合にのみ必要。

* (RequireJSのような非同期)ローダを使う場合
* コンパイル前に独自の前処理が必要な場合

次にあるコード例は要所だけ確認する(``<script>``の中が該当部分)。正直言ってよく分からないが、本当に必要になった時に調べればいい(たぶんそうならない)。

* `angular.module(...)`で作業用モジュールを手動作成し...
    * その内部でコントローラに対して追加設定を記述
* `angular.element(document).ready(function() {...}`を使い手動で仕掛ける
    * `angular.bootstrap(document, ['myApp']);`で実行

### Deferred Bootstrap

ここも同様。必要になった時に読めばいい内容なので略。


Internet Explorer Compatibility
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/ie>

> Angularは1.3からIE8のサポートを打ち切った。1.2はまだサポートを続けているので、IE8も対象に含めたいのであれば1.2を使うこと。以下いつもながら読むのが嫌なトピックなのでさらっと流す。

### Short Version

対策は次の通り。詳しい説明は次のLong Versionで行う。

1. 古いIEではJSONグローバルオブジェクトがないため[JSON2](https://docs.angularjs.org/guide/ie)または[JSON3](http://bestiejs.github.io/json3/)を使う
2. XMLの名前空間を定義(カスタムタグ対応 - 次のLong Versionに説明あり) `xmlns:ng="http://angularjs.org"`
3. `ng-app`ディレクティブを使うタグに`id="ng-app"`を追加(これは理由不明)
4. カスタムタグ(例:`<ng:view>`)は使わず属性で対応する(`<div ng-view>`)
5. カスタムタグが必要なら事前に`document.createElement`で登録する
6. `style="{{...}}"`はIE11でしか動かないのでng-styleを使う

### Long Version

昔のIEは(当時の)HTMLにないタグ名があると不具合を起こす厄介な問題がある。対処方法はいくつかある。

* 事前にXML名前空間を`<html xmlns:my="ignored">`のように定義しておく(ダミーなので"igonored"の部分は何でもいい)。すると`<my:elem>`のように`my:`で始まるものは通してくれる。
* 事前に`document.createElement('foo')`のようにDOMを使いダミー要素を作っておく。すると`<foo>`という要素名は通るようになる
    * ちなみにこの方法を使ってHTML5要素を古いIEが受け付ける(エラーにならない)ようにするライブラリが [html5shim](https://code.google.com/p/html5shim/)
* カスタムタグを使う要素にCSSで設定する場合はCSSより前で上記設定を行うこと(後だとエラーになる)。

### The Good News

以上の問題はカスタムタグを使う場合で、属性側でディレクティブを使えば問題は起こらない。

### What happens if I fail to do this?

IEがカスタムタグをどのように誤って扱ってしまうかという解説。例えば`<foo>bar</foo>`とするとツリーにならず、次の3つの兄弟ノードとして認識される(構造が崩壊する)。

* `<foo>` (self-closing扱い)
* bar
* `</foo>` (これもself-closing扱い)

### CSS Styling of Custom Tag Names

カスタムタグをcreateElementで登録する場合はCSSよりも前にしないとエラーになる。これはその対応例で、headの一番最初に書くのがセオリー(エンコーディング設定があればその次)。


Unit Testing
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/unit-testing>

最後はテスト。まずチュートリアルの冒頭部だけ読み、Angularではテストツールに何を使っているのか確認する。

* ユニットテストにKarmaを使う
* E2E(end to end)テストにProtractorを使う

これらはどちらもテストフレームワークのJasmineをベースとしており、Jasmineを使って記述する。オフィシャルのよいドキュメントがある。

<http://jasmine.github.io/2.0/introduction.html>

和訳もある。これは旧版の訳だが概要を把握するには十分だと思う。

<http://mitsuruog.github.io/jasmine/>

> 実は今までJavaScriptのテスト環境に触れたことすらなかったのだが、明らかにJasmineはRSpec(Rubyの主力テストツール)を手本に作られている(外見はまるで同じ)。RSpec使いの自分には全く違和感ない。

本文に進むと、前半部には具体的な事は何も書いていない。しかし少し読み始めると自分にはどうも言っていることがおかしく感じられることばかり。

> これを書いているのはJavaの方法が最良だと100%信じて疑わないような人だろう(おそらく開発者本人ではない)。こちらは逆にJavaScriptは十分に高級な言語なのでDIという概念は不要と考えているため当然かみ合わない。

例えば次の例は(完全に悪い意味で)"hard to test"と言っているが、自分にはこれのどこがテスト困難なのか全く理解できない。

``` javascript
var oldXHR = XHR;               // XHRを保存
XHR = function MockXHR() {};    // モックに差し替え(説明用:本当はJasmineのSpyなどを使う)
var myClass = new MyClass();    // このMyClassがテストの対象
myClass.doWork();               // doWorkメソッドの中でnew XHR()を使う
// MockXHRが正しい引数でメソッドコールされていたかアサーション実行(略)
XHR = oldXHR; // 元に戻す(これを忘れると何か悪いことが起きる?)
```

XHRをモックに置き換えてMyClassインスタンスのテストを実行する。しかし終了後に戻し忘れると問題になるでしょというのが本文の論拠(こじつけでは?)。さらに「これはモンキーパッチだから絶対悪い」と決め付けているが、これも詭弁にしか聞こえない。

そもそもJavaではこういうモンキーパッチができないために考え出されたのがDIだということを思い出すこと。JavaScriptだからこそ、このようないい加減(?)なこともできる(むしろよいことでは?)。

> DIのトピックの冒頭に考察を書いておいた。

「もし最後に元に戻すのを忘れたら...」というのならモックに差し替えてテスト実行後に復元を行う関数を書けばいい。これならグローバル環境を一切汚染することなく安全に復元できるし、一回作っておけば後はいくらでも使い回せる。

``` javascript
// 一回このようなものを作っておけば汎用ユーティリティとして使える
function mockTest(globalObject, property, mockObject, testfunc) {
  var originalProperty = globalObject[property];
  globalObject[property] = mockObject;
  // try/finallyを使えばたとえ例外が発生しても確実に復元できる
  try { testFunc.call(); }      // テスト実行
  finally { globalObject[property] = originalProperty; }    // 元に戻す
}

// 利用方法(何だかDIに似てきた?)
mockTest(window, 'XHR', function MockXHR() {}, function() {
  var myClass = new MyClass();
  myClass.doWork();
  // (略)
});
```

> こうやって書くと見かけがDIの書式(アノテーション)と似てくる。おそらく偶然の一致ではなく、方針(思想?)が異なっていても設計がこなれてくると自然と同じような形になってくるのだと思う。

もちろん最初からMyClassで使うXHRを固定でなく外部から設定可能にしておけばもっとよい。ライブラリ作成経験のあるプログラマならコンストラクタのオプションハッシュにでも仕込んでおくだろう(Rubyではこれくらい当たり前)。

これを「注入」と呼びたいのならそれは自由だが、高級言語派からするとあまりにJava派の主張が強くて困惑する(JavaScriptは高級言語なのに...)。

高級言語を使っていればこんなのは当然(これをわざわざ「注入」と表現する感性を理解できないだけ)。何だかもう馬鹿馬鹿しくなってきたのでこの辺でもうやめる。

> Angularの設計自体は批判しない。よい意味で実績があり(十分に枯れている)Javaの設計方針を手本にしただけだと思う。しかしその「宣伝文」(ここの文章のこと)があまりに的外れなのでちょっと頭に来た(それだけのこと)。

中間は全部飛ばして、後半の残り1/3くらいになってようやくJasmineを使う文例が出てくるのでそこだけ確認する。

### Simple HTML Element Directive

ここのJasmineコードは少し読んでみる。テストの内容に興味はないが、使っているAPIはちゃんと調べておく。こうしておけば後で実際に自分で書くときに手間が省ける。

> もちろんこれを読む皆さんにも...

* Jasminテスト一式(suite)は`describe('テストの説明', function() {テスト一式})`
* `beforeEach`はJasmineテストの各項目実行前の共通初期化
* `inject`は`angular.mock.inject`のショートカット([APIリファレンス](https://docs.angularjs.org/api/ngMock/function/angular.mock.inject)を参照)
    * これを使って`$compile`と`$rootScope`の両サービスをモックに差し替える
* Jasmineテストの項目(spec)は`it('テスト項目の説明', function() {テスト内容})`
* `expect(ブール値)`はJasmineのアサーション記述方法


E2E Testing
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/e2e-testing>

E2E(End to end) testという用語はかなり新しい言葉で、以前は「インテグレーションテスト」が一般的だったと思う。とにかくUnit testは「単体テスト」、E2E testは「全体テスト」と訳せば少なくとも間違いではないだろう。

> (参考) E2E testのGoogleトレンドを調べてみた(2013年以前は全く使われていない)。これはもちろんAngular専用語ではないのだが、いろいろな検索結果を見る限り特に日本語の「E2Eテスト」はそれに近い状態だと思う。
> 
> <https://www.google.co.jp/trends/explore#q=E2E%20test>
> 
> > "E2E testing'という用語の起源(たぶん2013年)とその普及理由を調べたが見つけられなかった(誰か知っている人がいたら教えてください)。

全体テストなので当然ブラウザ(またはそれをシミュレートする何か)が必要で、さらにテスト項目を実行するためにはそれを自動制御する技術が必要になる。

Angularには以前Angular Scenario Runnerというツールがあったが、現在は新ツールのProtractorを用いる(Angularなので「分度器」という洒落 - センスよし)。

<https://github.com/angular/protractor>

本文はなぜか初心者向けJasmin入門のような内容だがやはり説明不足。そこで今回は基本事項だけ確認しておく(後で使うときに本格的に調査するための下調べ)。

* node.js上で動作する
* Jasmineベース(他言語テストフレームワークへの対応もあり)
* ブラウザ制御とユーザ入力のシミュレートにWebDriverを用いる
    * Selenium Server上で動作(要Java環境)
    * ブラウザ別に専用ドライバが用意されている

> Seleniumにはやや複雑な経緯がある(次が詳しい)。元々はブラウザの外部制御技術としてのSeleniumがあり、その後Googleが作ったWebDriverが統合されて現在のSelenium WebDriverになっている。
> 
> <http://blog.trident-qa.com/2013/05/so-many-seleniums/>

Protractorドキュメントを確認する。

<https://github.com/angular/protractor/blob/master/docs/toc.md>

始めは先頭の3項目を読んでインストールする(今はまだやらない)。

* [Protractorのセットアップ](https://github.com/angular/protractor/blob/master/docs/protractor-setup.md)
* [Selenium Serverのセットアップ](https://github.com/angular/protractor/blob/master/docs/server-setup.md)
* [対応ブラウザ一覧と設定方法](https://github.com/angular/protractor/blob/master/docs/browser-setup.md)
* (最後の"Choosing a Framework"はJasminがデフォルトなのでセットアップ不要)

次に読むのは当然Tutorialだが、和訳があるのでこちらを紹介しておく。

<http://qiita.com/weed/items/30098f7be2f753580f63>

> いろいろ検索すると以前はドキュメント不足で苦労していたことが伺われる。今はドキュメンテーションも十分なレベルに達しつつあるようだ。

本文には分かりやすいコード例もある(でも参考になるのはここだけかも...)。実際に自分がテストを書く時に困らない程度の準備はもうできたと思う。最後に外部モジュールの使い方を確認して学習完了とする。


Animations
------------------------------------------------------------------------
<https://docs.angularjs.org/guide/animations>

最後はAngularの標準外部モジュールの使用法について。

このngAnimationはアニメーション支援機能だが、これはangular.js本体ではなく外部モジュールになっている(ファイルも別)。外部モジュールは他にもあり、APIリファレンスで確認した一覧は次の通り(名前を見れば機能も大体分かるので説明略)。

* ngAnimate
* ngCookies
* ngMessages
* ngMock
* ngMockE2E
* ngResource
* ngRoute
* ngSanitize
* ngTouch

別モジュールのインストール方法はAPIリファレンスに書いてある。ngAnimateの場合を例に簡単に示す(全て方法は同じ)。

* angular-animate.jsを読み込む(CDNのangular(.min).jsと同じパスに必ずある)
* アプリケーションモジュールの依存モジュールを設定
    * `angular.module('app', ['ngAnimation'])`

詳しくはAPIリファレンスを参照。

> このngAnimateだけ(おそらく代表として)Developer Guideに含まれているが、このトピックの本文を見てもなかなか分からない。APIリファレンスの方がいいと思う(もちろんCSS3アニメーションの予備知識が必要)。
