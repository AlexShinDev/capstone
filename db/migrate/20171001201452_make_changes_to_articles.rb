class MakeChangesToArticles < ActiveRecord::Migration[5.1]
  def change
    remove_column :articles, :date_accessed, :date
    add_column :articles, :content, :text
    change_column :articles, :date_published, :string
  end
end
