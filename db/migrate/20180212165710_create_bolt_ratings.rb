class CreateBoltRatings < ActiveRecord::Migration[5.1]
  def change
    create_table :bolt_ratings do |t|
      t.references :user, foreign_key: true
      t.references :bolt, foreign_key: true
      t.integer :rating
      t.string :picture

      t.timestamps
    end
  end
end
