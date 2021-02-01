require 'rails_helper'

RSpec.describe "Comments", type: :request do
  let!(:user) { create(:user) }
  let!(:article) { create(:article, user: user)}
  let!(:comment) { create(:comment, article: article, user: user) }

  describe 'GET /comments' do
    context 'ログインしている場合' do
      before do
        sign_in user
      end

      it '200 Status' do
        get article_comments_path(article_id: article.id)
        expect(response).to have_http_status(200)
      end
    end
  end

  describe "POST /comments" do
    context 'ログインしている場合' do
      before do
        sign_in user
      end

      it 'コメントが保存される' do
        comment_params = attributes_for(:comment)
        post article_comments_path(article_id: article.id, comment: comment_params)
        expect(response).to have_http_status(200)

        body = JSON.parse(response.body)
        expect(body['content']).to eq(comment_params[:content])
      end
    end
  end
end
