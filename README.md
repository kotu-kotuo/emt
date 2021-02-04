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
<br>

**【ログイン・ログアウト機能】**<br>
deviseで実装。<br>
<br>
![画面収録 2021-02-04 13 03 13_7](https://user-images.githubusercontent.com/52486487/106866943-64032f00-6710-11eb-8a68-9cacc0bc5b56.gif)<br>
<br>
<br>
<br>
<br>

**【記事投稿・削除機能】**<br>
ActiveStorage,AWS S3 を使用。<br>
ActiveStorageで記事に画像を複数枚attachedすることができる。<br>
データはクラウドストレージのS3に保存される。<br>
<br>
![画面収録 2021-02-04 13 03 13_6](https://user-images.githubusercontent.com/52486487/106866325-aa0bc300-670f-11eb-82cb-2ab071c058ba.gif)<br>
<br>
<br>
<br>
<br>

**【スライド機能】**<br>
プラグインのslickを使用。<br>
7秒ごとに自動スライドする<br>
<br>
![画面収録 2021-02-04 13 03 13_8](https://user-images.githubusercontent.com/52486487/106867411-ee4b9300-6710-11eb-9f6f-e41a5d293f5c.gif)<br>
<br>
<br>
<br>
<br>

**【プロフィールアバター登録・編集】**<br>
ActiveStorage,AWS S3 を使用。<br>
<br>
![画面収録 2021-02-04 13 03 13_9](https://user-images.githubusercontent.com/52486487/106867681-3ec2f080-6711-11eb-809e-f0ac0d9d68c2.gif)<br>
<br>
<br>
<br>
<br>

**【コメント機能】**<br>
Ajax(axios,jQuery)で実装。<br>
コメント追加ボタンを押すと入力欄が表示される。<br>
コメント投稿ボタンを押すとcommentがcreateされて<br>
jsonでデータが送られ、そのresponseからコメントを表示させる。<br>
serializerでリレーションを作る必要があることに気付くのに苦労した。<br>
<br>
![画面収録 2021-02-04 13 03 13_10](https://user-images.githubusercontent.com/52486487/106867918-7fbb0500-6711-11eb-9c26-2e5eaab60cf6.gif)<br>
<br>
<br>
<br>
<br>

**【いいね機能】**<br>
Ajax(axios,jQuery)で実装。<br>
白いハートとピンクのハートの両方にhiddenクラスをつけてスイッチング。<br>
白いハートをクリックするとlikeデータがcreateされてそのresponseでjsonが送られ<br>
ピンクのハートのhiddenをremoveしてハートがピンクになる。<br>
もう一度押すとlikeデータがdeleteされてハートのhiddenが切り替わりハートが白くなる。<br>
<br>
![画面収録 2021-02-04 13 03 13_11](https://user-images.githubusercontent.com/52486487/106869051-cf4e0080-6712-11eb-87ff-2d361b0f1a41.gif)<br>
<br>
<br>
<br>
<br>

**【フォロー機能】**<br>
Ajax(axios,jQuery)で実装。<br>
フォローボタンを押すとfollowerとfollowingとの間にリレーションが生まれ、<br>
フォローボタンが解除ボタンへと切り替わる。<br>
もう一度押すとリレーションがdestroyされフォローボタンへと切り替わる。<br>
<br>
![画面収録 2021-02-04 13 03 13_12](https://user-images.githubusercontent.com/52486487/106869968-df1a1480-6713-11eb-98a5-6b5f2f5dbbb3.gif)<br>
<br>
<br>
<br>
<br>

**【Twitter 共有機能】**<br>
<br>
![画面収録 2021-02-04 13 03 13_13](https://user-images.githubusercontent.com/52486487/106870142-1f799280-6714-11eb-9970-197374f64c9b.gif)<br>
<br>
<br>
<br>
<br>

**【投稿記事一覧ページ】**<br>
<br>
![画面収録 2021-02-04 13 03 13_14](https://user-images.githubusercontent.com/52486487/106870926-06bdac80-6715-11eb-8016-7c6a37a8c589.gif)<br>
<br>
<br>
<br>
<br>

**【フォロー・フォロワー一覧】**<br>
<br>
![画面収録 2021-02-04 13 03 13_15](https://user-images.githubusercontent.com/52486487/106871143-41bfe000-6715-11eb-94b7-8b658611f05d.gif)<br>
<br>
<br>
<br>
<br>

**【メール通知機能】**<br>
mailer, sidekiq, Redis, sendgridを使用。<br>
記事にコメントが投稿されるとその記事を作成したユーザーに通知メールが送られる。<br>
<img width="1480" alt="スクリーンショット 2021-02-04 18 43 36" src="https://user-images.githubusercontent.com/52486487/106874555-0a533280-6719-11eb-885f-e776b57fe2bc.png"><br>

<br>
<br>
<br>
<br>

**【レスポンシブデザイン】**<br>
投稿ボタン、ヘッダー、フォントサイズ、アイコンなどの大きさが変わります。<br>
<br>
![画面収録 2021-02-04 13 03 13_16](https://user-images.githubusercontent.com/52486487/106871706-df1b1400-6715-11eb-89e5-ad87fbf36ee7.gif)<br>
<br>
<br>
<br>
<br>

**【無限スクロール（実装予定）】**<br>
<br>
<br>
<br>
<br>
