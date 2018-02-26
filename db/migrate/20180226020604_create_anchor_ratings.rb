class CreateAnchorRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :anchor_ratings do |t|
      t.references :user, foreign_key: true
      t.references :anchor, foreign_key: true
      t.integer :rating
      t.string :picture

      t.timestamps
    end
  end
end
