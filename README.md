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
<br>
<img width="1480" alt="スクリーンショット 2021-02-04 18 43 36" src="https://user-images.githubusercontent.com/52486487/106874555-0a533280-6719-11eb-885f-e776b57fe2bc.png"><br>

<br>
<br>
<br>
<br>

**【レスポンシブデザイン】**<br>
投稿ボタン、ヘッダー、フォントサイズ、アイコンなどの大きさが変化。<br>
<br>
![画面収録 2021-02-04 13 03 13_16](https://user-images.githubusercontent.com/52486487/106871706-df1b1400-6715-11eb-89e5-ad87fbf36ee7.gif)<br>
<br>
<br>
<br>
<br>

**【無限スクロール】**<br>
Infinite Scroll、kaminariを使用。<br>
３ページずつ読み込むよう設定。<br>
<br>
![画面収録 2021-02-04 13 03 13_17](https://user-images.githubusercontent.com/52486487/106886373-265dd080-6727-11eb-8ee1-e2dda166085d.gif)<br>
<br>
<br>
<br>
<br>

**【テスト】**<br>
Rspec, Factorybotを使用。<br>
model spec, request spec, system spec.<br>
<br>
<img width="978" alt="スクリーンショット 2021-02-05 13 51 24" src="https://user-images.githubusercontent.com/52486487/106991298-48079800-67b9-11eb-9c3a-c081665efdea.png"><br>
<br>
<br>
<br>
<br>

## schema<br>
<br>

```ruby
ActiveRecord::Schema.define(version: 2021_01_23_164816) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "articles", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_articles_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "article_id"
    t.text "content", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["article_id"], name: "index_comments_on_article_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "likes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "article_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["article_id"], name: "index_likes_on_article_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "relationships", force: :cascade do |t|
    t.bigint "following_id", null: false
    t.bigint "follower_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["follower_id"], name: "index_relationships_on_follower_id"
    t.index ["following_id"], name: "index_relationships_on_following_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", default: "", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end

```
<br>
<br>
<br>
<br>

## gemfile<br>
<br>

```ruby
source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.6'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.1.1'
# Use postgresql as the database for Active Record
gem 'pg', '~> 1.1'
# Use Puma as the app server
gem 'puma', '~> 5.0'
# Use SCSS for stylesheets
gem 'sass-rails', '>= 6'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '~> 5.0'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
gem 'bootsnap', '>= 1.4.4', require: false

gem 'devise'
gem 'devise-i18n'
gem 'devise-i18n-views'
gem 'bootstrap', '~> 4.3.1'
gem 'jquery-rails'
gem 'hamlit'
gem 'font-awesome-sass'
gem 'annotate'
gem 'active_model_serializers'
gem 'better_errors'
gem 'binding_of_caller'
gem 'faker'
gem 'active_decorator'
gem 'image_processing'
gem 'rails-i18n'
gem 'sidekiq'
gem 'sinatra', require: false
gem 'aws-sdk-s3', require: false
gem 'kaminari'
gem 'sendgrid-ruby'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'pry-byebug'
  gem 'rspec-rails'
  gem 'factory_bot_rails'
  gem 'dotenv-rails'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 4.1.0'
  # Display performance information such as SQL time and flame graphs for each request in your browser.
  # Can be configured to work on production as well see: https://github.com/MiniProfiler/rack-mini-profiler/blob/master/README.md
  # gem 'rack-mini-profiler', '~> 2.0'
  gem 'listen', '~> 3.3'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'erb2haml'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

```
<br>
<br>
<br>
Railsの教材を購入してから3週間ほどで作成しました。
