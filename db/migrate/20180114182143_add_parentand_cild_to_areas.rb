class AddParentandCildToAreas < ActiveRecord::Migration[5.1]
  def change
    change_table :areas do |t|
      t.references :parent, index: true
    end
  end
end
