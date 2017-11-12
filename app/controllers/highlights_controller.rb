class HighlightsController < ApplicationController
  def index
    @highlights = current_user.highlights
  end

  def create
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

  def update
    @highlight = Highlight.find(params[:id])
    @highlight = Highlight.assign_attributes(
                                            selection: params[:selection]
                                            )
    @highlight.save
  end

  def destroy
    highlight = Highlight.find(params[:id])

      highlight.destroy
    # if 
    #   redirect_to '/'
  end
end
