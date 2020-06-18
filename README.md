# ななしソング（774inc-songs）

推しの配信で流れてるBGMをいつでも聞けたら、作業が捗るのでは？という安直な考えで生まれたWebアプリです。

## 曲を追加するには

`data/songs.ts` ファイルを編集するだけで追加できます。

よく分からない方は [Twitter @ozelotjp_v](https://twitter.com/ozelotjp_v) にメンションを送っていただければ代わりに対応します。

## 各種データファイルについて

`data` ディレクトリにある３つのファイルにデータを格納しています。

### `groups.ts`

グループ名、グループに所属しているメンバを定義しています。

### `members.ts`

メンバのID、名前、プロフィール画像のファイル名を定義しています。

IDは内部で使用したり、URLとして使われます。

### `songs.ts`

BGMのタグ、YouTubeの動画IDを __メンバごと__ に定義しています。

タグがundefinedの場合はWeb上に `（タグなし）` と表記されます。

## 開発環境の準備

いくつか選択肢があります（推奨は３番です）

1. NodeJS v12を用意する
2. Dockerを用いて構築する（`docker-compose.yml` がルートディレクトリにあります）
3. [Visual Studio Code](https://code.visualstudio.com) と [Remote Development（拡張機能）](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) で開発する

