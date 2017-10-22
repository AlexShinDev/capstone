class HighlightsController < ApplicationController
  def index
    @highlights = current_user.highlights
  end
end
