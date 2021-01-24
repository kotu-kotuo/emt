require 'rails_helper'

RSpec.describe Article, type: :model do
  let!(:user) { create(:user) }
  let!(:article) { create(:article, user: user)}

  it 'articlesが存在する' do
    expect(article).to be_valid
  end

end
