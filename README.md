# Github Actionsで自動デプロイしてみる

## やってみる開発環境
 * [React Web](https://ja.reactjs.org/)
 * [Serverless Framework](https://serverless.com/) (AWS)
 * [Firebase (hosting/functions)](https://firebase.google.com/) (未実装,実装予定)
 * Android
 * iOS (未実装, 実装予定)
 * [Unity](https://unity.com/) (未実装, 実装予定)

## 目的

Github Actionsが使用できるようになったのでGithub上でのCI/CDの検証を行う。
CI/CDの検証を行って、うまく行く方法が確立されたら、他のプロジェクトにも適用する。

## やりたいこと
 * [React Web](https://ja.reactjs.org/): Reactで開発して、pushしたらbuildする。Buildが完了したらGithub PagesにDeployして、反映してくれること
 * [Serverless Framework](https://serverless.com/): Serverless FrameworkよりDeployコマンドを実行し、AWS Lambda環境にDeployして反映してくれること
 * [Firebase](https://firebase.google.com/): Firebase hosting/functions へのdeployコマンドを実行し、Firebaseに反映してくれること
 * Android: Androidアプリを開発し、pushしたらbuildし、完了したらApkファイルをダウンロードすることができること。またRelease Keyを作成し、Google Play Storeにアップロードすること
 * iOS: iOSアプリを開発し、pushしたらbuildし、完了したらipaファイルをダウンロードすることができること。また、ipaファイルをApp Storeにアップロードできるようにもすること
 * [Unity](https://unity.com/): Unityで開発を進める。完了したら、動画の抽出(映像作品)、Androidアプリのビルド、iOSアプリのビルドができること。また、Storeへのアップロードも可能であれば実施したい。

## Tips

### Github Actionsのはじめ方

Github Actionsを有効にして、 `.github/workflows/フォーマットしたymlファイル` を設置する事でGithub Actionsが実行してくれる。

![GithubActions  Activate](./images/GithubActions.png)

なお、本プロジェクトにおけるymlファイルの設定内容の詳細についてはそれぞれ[こちら](./.github/workflows/)を参照してください。

### Github Actionsにて非公開にしたい変数を登録して使用する

API Keyや環境変数などオープンにしたくない情報を用いて、CI/CDを行うときのやり方を紹介します。


### Github PagesへのDeploy方法

 * `Settings` よりGithub Pagesを有効にする
![GithubSettings](./images/GithubSettings.png)

![GithubPagesSettings](./images/GithubPagesSettings.png)

 * 公開鍵と秘密鍵のペアを生成する(以下コマンドを実行する)

```
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
```

* 作成した公開鍵(gh-pages.pub)の中身を `Deploy Keys` に登録する
![GithubSettingsDeployKey](./images/GithubSettingsDeployKey.png)
* 作成した秘密鍵(gh-pages)の中身を `Secrets` に登録する
![GithubSettingsSecrets](./images/GithubSettingsSecrets.png)
* `Workflowのyml`の中の`steps`の項目に以下の内容を適用する

```yml
    - name: deploy
      uses: peaceiris/actions-gh-pages@v2.5.0
      env:
        ACTIONS_DEPLOY_KEY: ${{ secrets.ACTIONS_DEPLOY_KEY }}
        PUBLISH_BRANCH: gh-pages
        PUBLISH_DIR: frontend/build
```

これで設定完了なので、特定のブランチにpushしたら、自動的にGithub Pagesにデプロイしてくれるようになります。

#### 設定したymlについての解説

詳細については[こちら](./.github/workflows/react-web-ci-cd.yml)を参照してください。

 * Github Pagesへのデプロイは[actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)というライブラリを使用しています。このライブラリを使用しています。ライブラリを使用する場合は `step` の項目のところで、`uses:` の項目を指定すると使用できます。この場合、`run:` 項目や `working-directory:`項目を使用することができません。
 * `secrets.ACTIONS_DEPLOY_KEY`は上記で登録した`Secret` の変数名の値が適用されます。Github Actionsの中で使用したい場合は `env:` 項目内で変数に指定することで使用することができます。(ライブラリの場合は指定があります)
 * `PUBLISH_BRANCH`の項目で`Github Pages`にデプロイしたいブランチを指定することができます。このとき `gh-pages` を指定していますが存在しなければ、Workflowを実行している中で勝手に作成してくれます。しかし、最初に作成する時はうまくdeployできないこともあるので、あらかじめ作っておくといいかもしれません。また `gh-pages` ブランチは Github Pagesの公開用のブランチとして指定することもできます。(うまくいかないかもしれないので、指定しておいたほうがいいと思います)

### AndroidアプリのBuild, Google Play Storeへの反映方法



### 参考
 * [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)
 * [GitHub Actions による GitHub Pages への自動デプロイ](https://qiita.com/peaceiris/items/d401f2e5724fdcb0759d)
 * [GitHub Actionsの仮想環境](https://help.github.com/ja/articles/virtual-environments-for-github-actions)

### 疑問点(課題)
 * GithubのWeb Page上からGithub Actionsを実行するやり方(手動実行のやり方)