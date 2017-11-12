require 'wikipedia'
class ArticlesController < ApplicationController
  def home
    @articles = Article.rand_articles
  end
  
  def index
    @articles = Article.where(user_id: current_user.id)
  end

  def create
    if current_user
      @article = Article.new(
                            user_id: current_user.id,
                            # id: params[:id],#Why do I need params?
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
      # not a typo.
    else
      flash[:warning] = "You need to be logged in to save an article"
      redirect_to "/login"
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

  def destroy
    article = Article.find(params[:id])

    article.destroy
    redirect_to '/articles'
  end

  def lookup_create_chrome
    article = Article.find_or_create_by(article_title: params[:article_title], user_id: params[:user_id])
  end

  def contact
    
  end
end
