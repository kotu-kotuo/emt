class ArticlesController < ApplicationController
  before_action :authenticate_user!, only: [:show, :new, :create, :destroy]



  def index
    @articles = Article.all.order(created_at: :desc).page(params[:page]).per(10)
  end

  def show
    @article = Article.find(params[:id])
  end

  def new
    @article = current_user.articles.build
  end

  def create
   @article = current_user.articles.build(article_params)
    if @article.save
      redirect_to root_path, notice: '投稿しました'
    else
      flash.now[:error] = '投稿できませんでした'
      render :new
    end
  end

  def destroy
    article = Article.find(params[:id])
    article.destroy!
    redirect_to root_path, notice: '削除に成功しました'
  end

  private

  def article_params
    params.require(:article).permit(:content, images: [])
  end

end
