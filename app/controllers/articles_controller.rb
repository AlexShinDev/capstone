class ArticlesController < ApplicationController
  def home
    
  end
  
  def index
    @article = Article.all
    bib = @article.first
    @biblio = []
    @biblio << bib.author
    @biblio << bib.article_title
    @biblio << bib.publisher
    @biblio << bib.date_published
    @biblio << bib.medium
    @biblio << bib.url
    @bibliography = @biblio.join(". ")
  end
  
  def show
    @article = Article.find(params[:id])
  end
end
