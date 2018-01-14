class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.integer :latitude
      t.integer :longitude

      t.timestamps
    end
  end
end
