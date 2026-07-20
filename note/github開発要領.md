# githubを用いた開発の流れ
Qiitaの記事を引用
https://qiita.com/kuuuuumiiiii/items/42d2d9ed11e3b29c22cf

## はじめに
今回はGitHubのプルリクエスト(PR)の一連の流れやコマンドについてやったので、わかりやすいようにまとめていきたいと思います。

## プルリクエストとは
自分の変更したコードをリポジトリに取り込んでもらえるよう依頼する機能のこと。
- 機能追加や改修など、作業内容をレビュー・マージ担当者やその他関係者に通知します。
- ソースコードの変更箇所をわかりやすく表示します。
- ソースコードに関するコミュニケーションの場を提供します。
などを目的にしていて、結果として開発者が品質の高いコードを書くことに繋がっています。

## プルリクエストの手順
1. mainブランチから作業ブランチを切る
1. ファイルを変更（実装などの作業をする）
1. ファイルの変更をコミットする
1. GitHubにpushをする
1. プルリクエストを作る
1. レビュー依頼をする
1. 修正がある場合は修正をする
1. approveをもらったらマージする
1. ブランチを切り替える
1. ローカルのmain(master)ブランチをリモートの最新と一致させる
1. 1.で切った作業ブランチを削除する

一連の流れはこんな感じになります。
次からはこちらの手順をコマンドと一緒に見ていこうと思います。

## 1.mainブランチから作業ブランチを切る
```
$ git checkout -b <ブランチ名>
```
`-b`オプションがついているので切ったブランチを新規作成して、作成したブランチに移動する。

```
$ git branch <ブランチ名>
$ git checkout <ブランチ名>
```
これでも同じ動作になりますが上の方が一回のコマンドでできるので便利！！

## 2.ファイルを変更（実装などの作業をする）
こちらは実際に自分が実装したいファイルなどを変更してください。

## 3.ファイルの変更をコミットする
### ステージに追加する
```
$ git add <ファイル名>

# 変更したファイルが多い場合
$ git add .
```
ファイル名のところに「.」を指定すると変更した全てのファイルをステージにまとめて追加することが出来る。

### ローカルリポジトリにコミットする
```
$ git commit

# コミットメッセージも一緒に作成する場合
$ git commit -m "コミットメッセージ"
```
`-m`オプションを指定することによってコミットメッセージも一緒に作ることができる。

:::note info
コミットメッセージは誰が見てもわかりやすように心掛けることと過去形ではなく現在進行形で書くと良い。
例） index.htmlファイルを新規作成
また、コミットはこまめに行う方が良い。
:::

## 4.GitHubにpushをする
```
$ git push origin <ブランチ名>
```

## 5.プルリクエストを送る
①　GitHub→リポジトリ名→Compare&Pull requestを選択する
![DA8F0FA9-A56A-483D-9AA3-04C65805EF2C.jpeg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3335067/1a0c62cf-9322-e4db-d741-abf51424544a.jpeg)

② 統合するブランチ(写真赤枠部分)と統合元ブランチ(写真青枠部分)のブランチ名を選択する
![1BE5BF71-372D-4AED-AFCE-5DE5CE3AF91D.jpeg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3335067/3d4adc90-f2fc-ebc5-861c-20602941c0ff.jpeg)

③ Create Pull requestをする

## 6.レビュー依頼をする
① Reviewersのところにレビューして欲しい人を追加する
![ADCF87D3-347C-4F97-AF7C-68D14440AF9D_4_5005_c.jpeg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3335067/f1f516d1-73e1-04a8-6e6b-aa894dab4d26.jpeg)

②　Assigneesのところで自分を選択する 
![2AEE7961-54B6-4CAF-8C67-4FDA820F95CE_4_5005_c.jpeg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3335067/d0ba3fac-35b4-aa58-7832-6fee4490f0ca.jpeg)

## 7.修正がある場合は修正をする
修正箇所があるファイルの修正をする
修正した後はまた変更をコミットする

## 8.approveをもらったらマージする
① レビューしてくれる方が画像のようにApproveをしてくれます
![8C6410C1-9C62-45F3-8B87-C4853D5CA2A6.jpeg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3335067/5efb8096-4f31-6a8f-071a-c722177fe63c.jpeg)

②　Merge pull requestを押してマージする
![E6259871-5BC4-4B7B-B9DB-6092B2DA10E3.jpeg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3335067/4a252e7e-848d-2732-7c51-5a2c43afcf44.jpeg)

## 9.ブランチをmain(master)に変更する
```
git checkout main
```

## 10.ローカルのmain(master)ブランチをリモートの最新と一致させる
```
$ git pull origin main
```
コマンドを打ってローカルのmain（master)ブランチを最新にする
![C08BEBD8-1A10-4D2C-971E-2A11664E207E_4_5005_c.jpeg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3335067/8ebcaeaa-c9ab-c914-4b94-cf3f0142cc2d.jpeg)


## 11.1.で切った作業ブランチを削除する
```
$ git branch -d <ブランチ名>
```

コマンドを打ってローカルで切った作業ブランチを削除しておく


## 一連の流れをコマンドだけでまとめてみる
```
# ブランチを作成
$ git checkout -b <ブランチ名>

# ファイルを変更して変更したファイルをコミットする
$ git add .
$ git commit -m "コミットメッセージ"

# GitHubにPushする
$ git push origin <ブランチ名>

# GitHub上でプルリクエストを送ってマージする

# ブランチをmainに変更する
$ git checkout main

# ローカルのmain(master)ブランチをリモートの最新に更新する
$ git pull origin main

# 1.で切った作業用ブランチを削除する
$ git branch -d <ブランチ名>
```

こんな感じでわからない時にすぐに見直せるように記載してみました。


## 最後に
今回はプルリクエストについてまとめていきました。
私自身まだプルリクエストに慣れていないので、操作する時に何度も見直してやることが多いので１日でも早くこちらの基本的なコマンドには慣れていきたいと思います。

最後までありがとうございました。
それではまた！！

## 参考文献
https://www.udemy.com/course/unscared_git/
https://www.youtube.com/watch?v=WMIiPcgGC4Q&t=745s
https://www.youtube.com/watch?v=ALQvBsWQ2dA
https://backlog.com/ja/git-tutorial/pull-request/01/

