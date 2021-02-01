class Api::V1::ArticlesController < ApiController
  include Pagination  #pagination_controllerにて定義

  def index
    articles = Article.all.page(params[:page]).per(5)
    pagination = resources_with_pagination(articles)  #pagination_controllerにて定義
    @articles = articles.as_json
    object = { articles: @articles, kaminari: pagination }  #{}でjsonを複数渡せる
    render json: object
  end

end
