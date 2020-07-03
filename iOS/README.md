# iOS開発におけるメモ

## トラブルシューティング

### パスが通っていない?

fasylaneでBuildしたら以下のようなエラーが出た。

```sh
 Unable to locate Xcode. Please make sure to have Xcode installed on your machine
```

Xcode Command Line toolsがインストールされていないか、`xcodebuild` などのXcode関連のコマンドを使うためのパスが通っていないために発生している可能性がある。

#### Xcode Command Line toolsがインストールされていない場合

Xcodeをインストールする場合は以下のコマンドを実行してみる

```sh
xcode-select --install
```

【参考】
 * https://qiita.com/kuriya/items/69d1e510fcaec4afd8c9

#### Xcode関連のコマンドを使うためのパスが通っていない

パスを通す場合は以下のコマンドを入力してみる

```sh
fastlane env
```

これで環境構築することができるはず。または以下のコマンド

```sh
sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer
```

【参考】
 * https://github.com/fastlane/fastlane/issues/12263
 * https://github.com/fastlane/fastlane/issues/12662

## Development Teamが設定されていない
