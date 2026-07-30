<!--
このファイルの <laravel-boost-guidelines> ブロックは Laravel Boost が生成したものを
日本語訳に差し替えたものです。`php artisan boost:install` を再実行するとブロック全体が
英語版で上書きされ、翻訳は失われます。再翻訳が必要な場合は Claude に依頼してください。
-->
<laravel-boost-guidelines>
=== foundation rules ===

# Laravel Boost ガイドライン

この Laravel Boost ガイドラインは、このアプリケーション向けに Laravel のメンテナーが厳選したものです。Laravel アプリケーションの開発を最良の体験にするため、これらのガイドラインに忠実に従ってください。

## 前提コンテキスト

このアプリケーションは Laravel アプリケーションであり、主要な Laravel エコシステムのパッケージとバージョンは以下のとおりです。あなたはこれらすべてのエキスパートです。ここに記載されたパッケージとバージョンに必ず従ってください。

- php - 8.5
- inertiajs/inertia-laravel (INERTIA_LARAVEL) - v3
- laravel/fortify (FORTIFY) - v1
- laravel/framework (LARAVEL) - v13
- laravel/prompts (PROMPTS) - v0
- laravel/wayfinder (WAYFINDER) - v0
- larastan/larastan (LARASTAN) - v3
- laravel/boost (BOOST) - v2
- laravel/mcp (MCP) - v0
- laravel/pail (PAIL) - v1
- laravel/pint (PINT) - v1
- laravel/sail (SAIL) - v1
- pestphp/pest (PEST) - v4
- phpunit/phpunit (PHPUNIT) - v12
- @inertiajs/react (INERTIA_REACT) - v3
- react (REACT) - v19
- tailwindcss (TAILWINDCSS) - v4
- @laravel/vite-plugin-wayfinder (WAYFINDER_VITE) - v0
- eslint (ESLINT) - v9
- prettier (PRETTIER) - v3

## スキルの有効化

このプロジェクトには `**/skills/**` にドメイン固有のスキルが用意されています。その領域の作業をするときは、必ず該当するスキルを有効化してください。行き詰まってから使うのでは遅すぎます。

## コーディング規約

- このアプリケーションで既に使われているコード規約にすべて従ってください。ファイルを作成・編集するときは、同階層のファイルを確認して正しい構造・手法・命名を把握してください。
- 変数名やメソッド名には説明的な名前を使ってください。例えば `discount()` ではなく `isRegisteredForDiscounts` とします。
- 新しくコンポーネントを書く前に、再利用できる既存コンポーネントがないか確認してください。

## 検証スクリプト

- テストがその機能をカバーし動作を証明している場合は、検証スクリプトを作成したり tinker を使ったりしないでください。ユニットテストと機能テストの方が重要です。

## アプリケーション構成とアーキテクチャ

- 既存のディレクトリ構造を守ってください。承認なしに新しいベースフォルダを作らないでください。
- 承認なしにアプリケーションの依存パッケージを変更しないでください。

## フロントエンドのバンドル

- フロントエンドの変更が UI に反映されないとユーザーが言う場合、`npm run build`、`npm run dev`、`composer run dev` の実行が必要な可能性があります。ユーザーに確認してください。

## ドキュメントファイル

- ドキュメントファイルは、ユーザーから明示的に依頼された場合のみ作成してください。

## 回答の仕方

- 説明は簡潔にしてください。自明な詳細を説明するのではなく、重要な点に絞ってください。

=== boost rules ===

# Laravel Boost

## ツール

- Laravel Boost は、このアプリケーション専用に設計されたツールを備えた MCP サーバーです。シェルコマンドやファイル読み込みといった手動の代替手段より、Boost のツールを優先してください。
- tinker で生の SQL を書く代わりに、`database-query` でデータベースに読み取り専用クエリを実行してください。
- マイグレーションやモデルを書く前に、`database-schema` でテーブル構造を確認してください。
- プロジェクトの URL は `get-absolute-url` で正しいスキーム・ドメイン・ポートを解決してください。ユーザーに URL を共有する前は必ず使用してください。
- ブラウザのログ・エラー・例外は `browser-logs` で読んでください。有用なのは直近のログだけなので、古いエントリは無視してください。

## ドキュメント検索（重要）

- コードを変更する前に必ず `search-docs` を使ってください。この手順を飛ばさないでください。インストール済みパッケージに基づいたバージョン固有のドキュメントが自動的に返されます。
- 関連するパッケージが分かっている場合は、`packages` 配列を渡して結果を絞り込んでください。
- 幅広くトピックベースのクエリを複数使ってください: `['rate limiting', 'routing rate limiting', 'routing']`。最も関連性の高い結果が先頭に来ます。
- パッケージ情報は既に共有済みなので、クエリにパッケージ名を含めないでください。`filament 4 test resource table` ではなく `test resource table` を使ってください。

### 検索構文

1. 単語はステミングされ AND 条件になります: `rate limit` は "rate" と "limit" の両方にマッチします。
2. `"quoted phrases"` のように引用符で囲むと語順・位置まで厳密にマッチします: `"infinite scroll"` はこの順で隣接している必要があります。
3. 単語とフレーズを組み合わせられます: `middleware "rate limit"`。
4. OR 条件にはクエリを複数渡してください: `queries=["authentication", "middleware"]`。

## Artisan

- Artisan コマンドはコマンドラインから直接実行してください（例: `php artisan route:list`）。利用可能なコマンドは `php artisan list` で調べ、パラメータは `php artisan [command] --help` で確認できます。
- ルートの確認は `php artisan route:list` を使ってください。`--method=GET`、`--name=users`、`--path=api`、`--except-vendor`、`--only-vendor` で絞り込めます。
- 設定値はドット記法で読めます: `php artisan config:show app.name`、`php artisan config:show database.default`。または `config/` ディレクトリの設定ファイルを直接読んでください。

## Tinker

- アプリケーションのコンテキストで PHP を実行し、デバッグやコードの検証ができます。ユーザーの承認なしにモデルを作成せず、ファクトリを使ったテストを優先してください。独自の tinker コードより既存の Artisan コマンドを優先してください。
- シェル展開を防ぐため、必ずシングルクォートを使ってください: `php artisan tinker --execute 'Your::code();'`
  - 内側の PHP 文字列にはダブルクォートを使います: `php artisan tinker --execute 'User::where("active", true)->count();'`

=== php rules ===

# PHP

- 制御構造には、本体が1行であっても必ず波括弧を使ってください。
- PHP 8 のコンストラクタプロパティ昇格を使ってください: `public function __construct(public GitHub $github) { }`。コンストラクタが private の場合を除き、引数ゼロの空の `__construct()` を残さないでください。
- すべてのメソッド引数に型ヒントを、戻り値には明示的な型宣言を付けてください: `function isAccessible(User $user, ?string $path = null): bool`
- Enum のキーは TitleCase を使ってください: `FavoritePerson`、`BestLake`、`Monthly`。
- インラインコメントより PHPDoc ブロックを優先してください。インラインコメントは極めて複雑なロジックにのみ付けてください。
- PHPDoc ブロックでは配列シェイプの型定義を使ってください。

=== deployments rules ===

# デプロイ

- Laravel は [Laravel Cloud](https://cloud.laravel.com/) でデプロイできます。本番の Laravel アプリケーションをデプロイ・スケールする最速の方法です。

=== tests rules ===

# テストの必須化

- すべての変更はプログラムによるテストが必要です。新しいテストを書くか既存のテストを更新し、影響範囲のテストを実行して通ることを確認してください。
- コード品質と速度を両立できる最小限のテストだけを実行してください。`php artisan test --compact` にファイル名やフィルタを指定して使ってください。

=== inertia-laravel/core rules ===

# Inertia

- Inertia は、既存のサーバーサイドのパターンを活かしつつ、現代的な SPA の複雑さなしに完全なクライアントサイドレンダリングの SPA を実現します。
- コンポーネントは `resources/js/pages` に配置します（`vite.config.js` で別途指定されていない限り）。サーバーサイドルーティングでは Blade ビューではなく `Inertia::render()` を使ってください。
- バージョン固有の Inertia ドキュメントと最新のコード例を得るため、必ず `search-docs` ツールを使ってください。
- 重要: Inertia のクライアントサイドのパターンを扱うときは `inertia-react-development` を有効化してください。

# Inertia v3

- v1、v2、v3 のすべての Inertia 機能が使えます。変更前にドキュメントを確認し、正しいアプローチを取ってください。
- v3 の新機能: 単独の HTTP リクエスト（`useHttp` フック）、自動ロールバック付きの楽観的更新、レイアウト props（`useLayoutProps` フック）、instant visits、`@inertiajs/vite` プラグインによる簡素化された SSR、エラーページ向けのカスタム例外ハンドリング。
- v2 から引き継がれた機能: deferred props、無限スクロール、merging props、ポーリング、プリフェッチ、once props、フラッシュデータ。
- deferred props を使うときは、パルスまたはアニメーション付きのスケルトンで空状態を用意してください。
- Axios は削除されました。インターセプター付きの組み込み XHR クライアントを使うか、必要なら Axios を別途インストールしてください。
- `Inertia::lazy()` / `LazyProp` は削除されました。代わりに `Inertia::optional()` を使ってください。
- prop の型（`Inertia::optional()`、`Inertia::defer()`、`Inertia::merge()`）は、ドット記法のパスでネストした配列の中でも機能します。
- `@inertiajs/vite` を使えば Vite の開発モードで SSR が自動的に動作し、開発中に別途 Node.js サーバーを立てる必要はありません。
- イベント名の変更: `invalid` は `httpException` に、`exception` は `networkError` になりました。
- `router.cancel()` は `router.cancelAll()` に置き換えられました。
- `future` 設定名前空間は削除されました。v2 の future オプションはすべて常に有効です。

=== laravel/core rules ===

# Laravel の作法に従う

- 新しいファイル（マイグレーション、コントローラー、モデルなど）は `php artisan make:` コマンドで作成してください。利用可能な Artisan コマンドは `php artisan list` で一覧でき、パラメータは `php artisan [command] --help` で確認できます。
- 汎用の PHP クラスを作る場合は `php artisan make:class` を使ってください。
- ユーザー入力なしで完了するよう、すべての Artisan コマンドに `--no-interaction` を渡してください。正しい動作のために適切な `--options` も渡してください。

### モデルの作成

- 新しいモデルを作るときは、有用なファクトリとシーダーも一緒に作ってください。`php artisan make:model --help` で利用可能なオプションを確認し、他に必要なものがないかユーザーに尋ねてください。

## API と Eloquent リソース

- API では原則として Eloquent API リソースと API バージョニングを使ってください。ただし既存の API ルートがそうなっていない場合は、アプリケーション既存の慣習に従ってください。

## URL の生成

- 他のページへのリンクを生成するときは、名前付きルートと `route()` 関数を優先してください。

## テスト

- テスト用のモデルを作るときは、そのモデルのファクトリを使ってください。手動でセットアップする前に、ファクトリに使えるカスタムステートがないか確認してください。
- Faker: `$this->faker->word()` や `fake()->randomDigit()` などのメソッドを使ってください。`$this->faker` と `fake()` のどちらを使うかは既存の慣習に従ってください。
- テストを作成するときは `php artisan make:test [options] {name}` で機能テストを作り、ユニットテストが必要な場合は `--unit` を渡してください。ほとんどのテストは機能テストにすべきです。

## Vite のエラー

- 「Illuminate\Foundation\ViteException: Unable to locate file in Vite manifest」というエラーが出た場合は、`npm run build` を実行するか、ユーザーに `npm run dev` または `composer run dev` の実行を依頼してください。

=== wayfinder/core rules ===

# Laravel Wayfinder

Laravel のルートに対する TypeScript 関数の生成には Wayfinder を使ってください。`@/actions/`（コントローラー）または `@/routes/`（名前付きルート）から import します。

=== pint/core rules ===

# Laravel Pint コードフォーマッター

- PHP ファイルを変更した場合は、変更を確定する前に必ず `vendor/bin/pint --dirty --format agent` を実行し、プロジェクトの想定するスタイルに合わせてください。
- `vendor/bin/pint --test --format agent` は実行しないでください。フォーマットの問題を修正するには `vendor/bin/pint --format agent` をそのまま実行してください。

=== pest/core rules ===

## Pest

- このプロジェクトではテストに Pest を使っています。テストの作成: `php artisan make:test --pest {name}`。
- `{name}` 引数にテストスイートのディレクトリを含めないでください。`php artisan make:test --pest Feature/SomeFeatureTest` ではなく `php artisan make:test --pest SomeFeatureTest` を使ってください。
- テストの実行: `php artisan test --compact`、フィルタする場合は `php artisan test --compact --filter=testName`。
- 承認なしにテストを削除してはいけません。

=== inertia-react/core rules ===

# Inertia + React

- 重要: Inertia React のクライアントサイドのパターンを扱うときは `inertia-react-development` を有効化してください。

</laravel-boost-guidelines>
