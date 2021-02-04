<img width="1790" alt="スクリーンショット 2021-02-02 15 19 50" src="https://user-images.githubusercontent.com/52486487/106562338-83ae2200-656d-11eb-8d03-e23e97c422e8.png">

# EMT

写真投稿SNSアプリです。<br>
学んだことをアウトプットするために作成しました。<br>
写真を映させるためにデザインはシンプルにしました。<br>
そして少し遊び心を加えました。<br>
<br>
<https://emt-production.herokuapp.com/> <br>
<br>
<br>

## 使用技術

フロントエンド<br>
HAML <br>
Sass<br>
jquery-rails (4.4.0)<br>

バックエンド<br>
ruby (2.6.6)<br>
rails (6.1.1)<br>

インフラ<br>
pg (1.2.3)<br>
AWS S3<br>
heroku<br>

その他<br>
webpacker<br>
ActiveStorage<br>
<br>
<br>

## 機能一覧<br>

**【ログイン・ログアウト機能】**<br>
deviseで実装。<br>
![画面収録 2021-02-04 13 03 13_4](https://user-images.githubusercontent.com/52486487/106865027-f48c4000-670d-11eb-882e-9796e569ee17.gif)<br>
<br>

**【記事投稿・削除機能】**<br>
ActiveStorage,AWS S3 を使用。<br>
ActiveStorageで記事に画像を複数枚attachedすることができる。<br>
データはクラウドストレージのS3に保存される。<br>
![画面収録 2021-02-04 13 03 13_5](https://user-images.githubusercontent.com/52486487/106865800-03272700-670f-11eb-9147-e0bcac4dfafc.gif)<br>
<br>

**【スライド機能】**<br>
プラグインのslickを使用。<br>
7秒ごとに自動スライドする<br>
<br>

**【プロフィールアバター登録・編集】**<br>
ActiveStorage,AWS S3 を使用。<br>
<br>

**【コメント機能】**<br>
Ajax(axios,jQuery)で実装。<br>
コメント追加ボタンを押すと入力欄が表示される。<br>
コメント投稿ボタンを押すとcommentがcreateされて<br>
jsonでデータが送られ、そのresponseからコメントを表示させる。<br>
serializerでリレーションを作る必要があることに気付くのに苦労した。<br>
<br>

**【いいね機能】**<br>
Ajax(axios,jQuery)で実装。<br>
白いハートとピンクのハートの両方にhiddenクラスをつけてスイッチング。<br>
白いハートをクリックするとlikeデータがcreateされてそのresponseでjsonが送られ<br>
ピンクのハートのhiddenをremoveしてハートがピンクになる。<br>
もう一度押すとlikeデータがdeleteされてハートのhiddenが切り替わりハートが白くなる。<br>
<br>

**【フォロー機能】**<br>
Ajax(axios,jQuery)で実装。<br>
フォローボタンを押すとfollowerとfollowingとの間にリレーションが生まれ、<br>
フォローボタンが解除ボタンへと切り替わる。<br>
もう一度押すとリレーションがdestroyされフォローボタンへと切り替わる。<br>
<br>

**【Twitter 共有機能】**<br>
<br>

**【投稿記事一覧ページ】**<br>
<br>

**【フォロー・フォロワー一覧】**<br>
<br>

**【メール通知機能】**<br>
mailer, sidekiq, Redis, sendgridを使用。<br>
記事にコメントが投稿されるとその記事を作成したユーザーに通知メールが送られる。<br>
<br>

**【レスポンシブデザイン】**<br>
投稿ボタン、ヘッダー、フォントサイズ、アイコンなどの大きさが変わります。<br>
<br>

**【無限スクロール（実装予定）】**<br>
<br>
<br>

## ER 図<br>
<br>
<br>
