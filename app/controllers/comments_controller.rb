class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def index
    @article = Article.find(params[:article_id])
    @comments = @article.comments

    render json: @comments
  end

  def create
    article = Article.find(params[:article_id])
    @comment = article.comments.build(comment_params.merge(user_id: current_user.id))
    @comment.save!

    render json: @comment, include: { user: [ :profile] }
  end

  private
  def comment_params
    params.require(:comment).permit(:content)
  end

end
