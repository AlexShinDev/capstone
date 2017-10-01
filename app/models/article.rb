class Article < ApplicationRecord
  def generatebib
    @biblio = []
    @biblio << author
    @biblio << article_title
    @biblio << publisher
    @biblio << date_published
    @biblio << medium
    @biblio << url

    @biblio.join(". ")

  end
end
