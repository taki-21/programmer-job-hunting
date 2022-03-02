class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :company_id, :integer, after: :name
    add_column :users, :newgra_or_midcar, :string, after: :company_id
    add_column :users, :eng_category, :string, after: :newgra_or_midcar
    add_column :users, :admin, :boolean, after: :eng_category, default: false
    
    remove_column :users, :nickname, :string
  end
end
