<img width="1790" alt="スクリーンショット 2021-02-02 15 19 50" src="https://user-images.githubusercontent.com/52486487/106562338-83ae2200-656d-11eb-8d03-e23e97c422e8.png">

# EMT

写真投稿 SNS アプリです。<br>
学んだことをアウトプットするために作成しました。<br>
写真を映させるためにデザインはシンプルにしました。<br>
そして少し遊び心を加えました。<br>
<br>
<https://emt-production.herokuapp.com/>
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
<br>
<br>

## 機能一覧<br>

**ログイン・ログアウト機能**<br>
**画像投稿・削除機能**<br>
**プロフィールアバター登録・編集**<br>
**コメント機能**<br>

<br>
**いいね機能**<br>
<br>
Ajax(axios)で実装。<br>
白いハートとピンクのハートの両方にhiddenクラスをつけてスイッチングしています。<br>
白いハートをクリックするとlikeデータがcreateされてそのresponseでjsonが送られてピンクのハートのhiddenをremoveしてハートがピンクになります。<br>
もう一度押すとlikeデータがdeleteされてハートのhiddenが切り替わってハートが白くなります。
<br>
<br>
**フォロー機能**
<br>
Ajax(axios)で実装。
フォローボタンを押すとfollowerとfollowingとの間にリレーションが生まれ、フォローボタンが解除ボタンへと切り替わる。
もう一度押すとリレーションがdestroyされフォローボタンへと切り替わる。

**Twitter 共有機能**<br>
**投稿記事一覧ページ**<br>
**フォロー・フォロワー一覧**<br>
**メール通知機能**<br>
<br>

**無限スクロール（実装予定）**<br>
<br>
<br>

## ER 図<br>

<br>
<br>
