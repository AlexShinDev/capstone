class CreateHighlights < ActiveRecord::Migration[5.1]
  def change
    create_table :highlights do |t|
      t.integer :article_id
      t.text :selection
      t.integer :user_id

      t.timestamps
    end
  end
end
