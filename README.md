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
 * `Settings` よりGithub Pagesを有効にする
 * 公開鍵と秘密鍵のペアを生成する(以下コマンド)

```
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
```

 * 公開鍵の中身を `Deploy Keys` に秘密鍵の中身を `Secrets` にそれぞれ登録する
 * Workflowのymlの中の`steps`の項目に以下の内容を適用する

```
    - name: deploy
      uses: peaceiris/actions-gh-pages@v2.5.0
      env:
        ACTIONS_DEPLOY_KEY: ${{ secrets.ACTIONS_DEPLOY_KEY }}
        PUBLISH_BRANCH: gh-pages
        PUBLISH_DIR: frontend/build
```

 * このとき `secrets.ACTIONS_DEPLOY_KEY`は登録した`Secret` の変数名の値が適用される。
 * `PUBLISH_BRANCH`の項目で `gh-pages` を指定しているが存在しなければ、Workflowの中で勝手に作成してくれる。しかし、最初に1回目はうまくdeployできないこともあるので、あらかじめ作っておくといいかもしれない。また `gh-pages` ブランチは Github Pagesの公開用のブランチとして指定することもできる。(指定しておいたほうがいいと思われる)

### 参考
 * [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)
 * [GitHub Actions による GitHub Pages への自動デプロイ](https://qiita.com/peaceiris/items/d401f2e5724fdcb0759d)
 * [GitHub Actionsの仮想環境](https://help.github.com/ja/articles/virtual-environments-for-github-actions)

### 疑問点(課題)
 * GithubのWeb Page上からGithub Actionsを実行するやり方(手動実行のやり方)