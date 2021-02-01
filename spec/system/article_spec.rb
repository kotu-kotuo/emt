require 'rails_helper'

RSpec.describe 'Article', type: :system do
  let!(:user) { create(:user) }
  let!(:articles) { create_list(:article, 3, user: user) }

  it '記事一覧がひょうじされる' do
    visit root_path
    articles.each do |article|
      expect(page).to have_css('.article-username', text: user.username)
    end
  end

  it '記事詳細を表示できる' do
    visit root_path

    article = articles.first
    click_on article.images

    expect(page).to have_css('.article-show-content-right', text: article.content.to_plain_text)
  end
end
