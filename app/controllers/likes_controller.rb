class LikesController < ApplicationController
  before_action :authenticate_user!

  def show
    article = Article.find(params[:article_id])
    like_status = current_user.likes.exists?(article_id: article.id)

    render json: { hasLiked: like_status }
  end

  def create
    article = Article.find(params[:article_id])
    Like.find_or_create_by(article_id: article.id, user_id: current_user.id)

    render json: { status: 'ok' }
  end

  def destroy
    article = Article.find(params[:article_id])
    likes = article.likes.where(user_id: current_user.id)
    likes.destroy_all

    render json: { status: 'ok' }
  end
end
