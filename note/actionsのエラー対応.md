# Laravel スターターキットの GitHub Actions からエラーメールが届く問題
 
## 症状
 
- Laravel のスターターキットでセットアップしたプロジェクトに `.github/` ディレクトリがデフォルトで含まれている
- コミットを push するたびに Actions が走り、エラーログがメールで届く
- `.github/` 内の yml ファイルを**全てコメントアウトしたのにエラーが止まらない**
## 原因
 
全コメントアウトが「原因そのもの」の可能性が高いです。
 
ワークフローファイルは「中身が空 or 無効」だとジョブが走らないのではなく、GitHub 側が **`Invalid workflow file`** というエラーを出します。このエラーは通常のジョブ失敗と同じようにメール通知されます。
 
全行をコメントアウトすると YAML としては `null` にパースされるため、次のようなメッセージになります。
 
```
Invalid workflow file: .github/workflows/tests.yml#L1
No event triggers defined in `on`
```
 
つまり「止めたつもりが、逆に毎回エラーを生む状態」になっています。
 
まずは Actions タブ、または届いたメール本文を確認し、このエラーかどうかを切り分けてください。
 
## 対処法
 
### 1. ファイルごと削除する（一番確実）
 
```bash
git rm -r .github/workflows
git commit -m "Remove default GitHub Actions workflows"
git push
```
 
Laravel のスターターキットには以下が含まれていることが多いです。
 
| ファイル | 内容 |
| --- | --- |
| `tests.yml` | Pest / PHPUnit によるテスト |
| `lint.yml` | Pint / Prettier / ESLint による整形・静的解析 |
 
個人開発で CI が不要なら削除して問題ありません。あとで必要になったら `laravel/laravel` のリポジトリからコピーし直せます。
 
### 2. リポジトリ単位で Actions を無効化する
 
ファイルを残したい場合はこちら。
 
`Settings` → `Actions` → `General` → **Disable actions** を選択
 
これでワークフローが一切起動しなくなります。
 
### 3. メール通知だけを切る
 
CI は動かしたいが通知だけがうるさい、という場合。
 
アカウント設定の `Notifications` → `Actions` から、メールのチェックを外す、または「Only notify for failed workflows」を調整します。
 
## それでもメールが届く場合のチェックポイント
 
- **`.github/dependabot.yml` が存在する**
  Dependabot は Actions とは別系統で動くため、ワークフローを消しても通知が来ます。
- **別ブランチに古いワークフローファイルが残っている**
  push 先のブランチのファイルが使われるため、`main` だけ直しても他ブランチへの push で走ります。
- **`schedule` トリガーを使っている**
  この場合はデフォルトブランチのファイルが基準になります。
## まとめ
 
まずはエラーメール本文にある**ワークフロー名**と**メッセージ**を確認するのが最短ルートです。それが分かれば原因を特定できます。