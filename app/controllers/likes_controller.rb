class LikesController < ApplicationController
  before_action :authenticate_user!

  def show
    article = Article.find(params[:article_id])
    like_status = current_user.likes.exists?(article_id: article.id)

    render json: { hasLiked: like_status }
  end

  def create
    article = Article.find(params[:article_id])
    article.likes.create!(user_id: current_user.id)

    render json: { status: 'ok' }
  end

  def destroy
    article = Article.find(params[:article_id])
    like = article.likes.find_by!(user_id: current_user.id)
    like.destroy!

    render json: { status: 'ok' }
  end
end
