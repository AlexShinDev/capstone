class HighlightsController < ApplicationController
  def index
    @highlights = current_user.highlights
  end

  def create

    #current_user id in html send with ajax
    @highlight = Highlight.new(
                              selection: params[:selection],
                              user_id: params[:user_id],
                              article_id: params[:article_id]
                              )
    if @highlight.save
      redirect_to "/articles/user_article/#{@highlight.article_id}"
    else
      redirect_to "/home"
    end
  end
end
