require 'wikipedia'
class Article < ApplicationRecord

    belongs_to :user
    has_many :highlights

  def initialize(options_hash)
    super(options_hash)
    wiki_article = Wikipedia.find(article_title)
    wiki_content = wiki_article.sanitized_content.gsub(/(== ==|==)/, "<br />")
    update(
            url: wiki_article.fullurl,
            publisher: "Wikimedia Foundation, Inc",
            medium: "Web",
            content: wiki_content,
            image: wiki_article.main_image_url,
            summary: wiki_article.summary
            )
  end

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

  def self.rand_articles
    wiki_articles = []
    articles = []
    2.times do
      wiki_articles << Wikipedia.find_random
    end

    wiki_articles.each do |wiki_article|
      article = Article.new(
                            article_title: wiki_article.title,
                            url: wiki_article.fullurl,
                            # publisher: "Wikimedia Foundation, Inc",
                            # medium: "Web",
                            # content: wiki_article.text,
                            image: wiki_article.main_image_url,
                            summary: wiki_article.summary
                            )
      articles << article
    end
    articles
  end

  # def self.edited_content(string)
  # string.gsub(/(== ==|==)/, "<br />")
  # end

  def self.wiki_find(title)
    # reutrn json formated data need to mess with ruby code
    wiki_article = Wikipedia.find(title)

    wiki_content = wiki_article.sanitized_content.gsub(/(== ==|==)/, "<br />")
    article = Article.new(
                          article_title: wiki_article.title,
                          url: wiki_article.fullurl,
                          publisher: "Wikimedia Foundation, Inc",
                          medium: "Web",
                          content: wiki_content,
                          image: wiki_article.main_image_url,
                          summary: wiki_article.summary
                          )
    article
  end


end
