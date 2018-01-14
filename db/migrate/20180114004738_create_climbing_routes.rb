class CreateClimbingRoutes < ActiveRecord::Migration[5.1]
  def change
    create_table :climbing_routes do |t|
      t.string :name
      t.references :area, foreign_key: true
      t.string :protection_type
      t.integer :pitches
      t.string :picture

      t.timestamps
    end
  end
end
