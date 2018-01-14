class CreateAreas < ActiveRecord::Migration[5.1]
  def change
    create_table :areas do |t|
      t.string :name
      t.references :location, foreign_key: true
      t.integer :year_established

      t.timestamps
    end
  end
end
