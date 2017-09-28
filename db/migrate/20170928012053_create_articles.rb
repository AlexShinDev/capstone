class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :url
      t.integer :user_id
      t.string :article_title
      t.string :publisher
      t.date :date_published
      t.string :medium
      t.string :author
      t.date :date_accessed

      t.timestamps
    end
  end
end
