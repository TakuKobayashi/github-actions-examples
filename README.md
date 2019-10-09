# Github Actionsで自動デプロイしてみる

## やっている環境
 * React
 * serverless framework

## 目的

Github Actionsが使用できるようになったのでGithub上でのCI/CDの検証を行う。
CI/CDの検証を行って、うまく行く方法が確立されたら、他のプロジェクトにも適用させる。

## やりたいこと
 * Frontend: Reactで開発して、pushしたらbuildする。Buildが完了したらGithub PagesにDeployして、反映してくれる事。
 * Backend: Serverless FrameworkよりDeployコマンドを実行し、AWS Lambda環境にDeployして反映してくれる事。

## Tips

### Github Actionsのはじめ方

Github Actionsを有効にして、
`.github/workflows/フォーマットしたymlファイル` を設置する事でGithub Actionsが実行してくれる


### Github ActionsにSecretな変数を登録する

API Keyや環境変数などオープンにしたくない情報を用いて、CI/CDを行うときのやり方を紹介

### Github PagesへのDeploy方法
 * 公開鍵と秘密鍵のペアを生成する(以下コマンド)

```
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
```

 * 公開鍵の中身を `Deploy Keys` に秘密鍵の中身を `Secrets` にそれぞれ登録する


### 参考
 * [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)
 * [GitHub Actions による GitHub Pages への自動デプロイ](https://qiita.com/peaceiris/items/d401f2e5724fdcb0759d)
 * [GitHub Actionsの仮想環境](https://help.github.com/ja/articles/virtual-environments-for-github-actions)