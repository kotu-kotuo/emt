require 'rails_helper'

RSpec.describe "Comments", type: :request do
  let!(:user) { create(:user) }
  let!(:article) { create(:article, user: user)}
  let!(:comments) { create_list(:comment, 3, article: article) }

  describe 'GET /comments' do
    it 'ステータス200' do
      get article_comments_path(article_id: article.id)
      expect(response).to have_http_status(200)
    end
  end
end
