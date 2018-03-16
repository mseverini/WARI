class AddPasswordRecoveryColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :password_token, :string
    add_column :users, :password_token_date, :datetime
  end
end
