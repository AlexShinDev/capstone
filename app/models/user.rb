class User < ApplicationRecord
  has_secure_password
  has_many :articles
  has_many :highlights, through: :articles


  def user_articles
    article.where(user_id: current_user.id)
  end
end
