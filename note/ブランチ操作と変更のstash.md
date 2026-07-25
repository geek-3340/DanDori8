## 状況／目的

パッケージの日本語化ブランチ（feature/lang-ja）にて
- ブランチ名と直前のコミットメッセージを変更したい
- 設定画面のUI調整に伴う変更内容（ステージ前）を別の新規ブランチにコミットしたい

---

## 学んだこと

### ブランチ名の変更

#### 今いるブランチの場合

```bash
git branch -m 新しい名前
```

#### 別のブランチの場合

```bash
git branch -m 古い名前 新しい名前
```

#### リモートへの反映

```bash
# 新しい名前でpush
git push -u origin 新しい名前

# 古いブランチをリモートから削除
git push origin --delete 古い名前
```

---

### コミットメッセージの変更

#### 直前のコミット

```bash
git commit --amend -m "新しいメッセージ"
```

#### 過去のコミット（３つまで）

```bash
git rebase -i HEAD~3
```

エディタが開いたら、直したいコミットの行頭の `pick` を `reword`（または `r`）に変更して保存。

その後メッセージ編集画面が順に出てきます。

#### 変更後

```bash
git push --force-with-lease origin ブランチ名
```

リモートに反映させるために必要
`--force-with-lease` を付けないとエラーになる

---

### ローカル変更を新規ブランチ作成=>コミットする手順

1. stashで変更を一時退避

```bash
git stash push -m "ブランチ切替に伴う変更内容の一時退避"
```

2. 新規ブランチを作成し移動

```bash
git switch -c feature/new-branch
```

3. 新規ブランチにstashを戻す

```bash
git stash pop
```

以降は通常通り、ステージ・コミット・プッシュでOK