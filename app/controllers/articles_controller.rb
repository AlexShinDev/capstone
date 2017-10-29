require 'wikipedia'
class ArticlesController < ApplicationController
  def home
    @articles = Article.rand_articles
  end
  
  def index
    @articles = Article.where(user_id: current_user.id)
  end

  def create
    @article = Article.new(
                          user_id: current_user.id,
                          id: params[:id],
                          article_title: params[:article_title],
                          url: params[:url],
                          publisher: "Wikimedia Foundation, Inc",
                          medium: "Web",
                          content: params[:content],
                          image: params[:image],
                          summary: params[:sumamry]
                          )
    if @article.save
      flash[:success] = "Article Successfully Saved"
      redirect_to "/articles/user_article/#{@article.id}"
    else
      flash[:warning] = "Error Saving Article, Please Try Again"
      redirect_to "/articles/#{@article_title}"
    end
  end
  
  def lookup
    # if ikipedia.find(params[:id])
    #   @article = Article.find(params[:id])
    # else
      @article = Article.wiki_find(params[:article_title])
    # end

  end

  def show
    @article = Article.find(params[:id])
  end
end
