class CreateBolts < ActiveRecord::Migration[5.1]
  def change
    create_table :bolts do |t|
      t.integer :number
      t.string :bolt_type
      t.integer :year_placed
      t.references :climbing_route, foreign_key: true
      t.integer :pitch

      t.timestamps
    end
  end
end
