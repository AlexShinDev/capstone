require 'wikipedia'
class ArticlesController < ApplicationController
  def home
    @articles = Article.rand_articles
  end
  
  def index
    @articles = Article.all
  end

  def create
    # wiki_article = this.
    @article = Article.new(
                          user_id: current_user.id,
                          article_title: wiki_article.title,
                          url: wiki_article.fullurl,
                          publisher: "Wikimedia Foundation, Inc",
                          medium: "Web",
                          content: wiki_article.text,
                          image: wiki_article.main_image_url
                          )
    if @article.save
      flash[:success] = "Article Successfully Saved"
      redirect_to "/articles"
    else
      flash[:warning] = "Error Saving Article, Please Try Again"
      redirect_to "/articles/#{@article_title}"
    end
  end
  
  def show
    @article = Article.find(params[:article_title])
  end
end
