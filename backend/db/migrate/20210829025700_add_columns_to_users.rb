class AddColumnsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :gender, :integer, null: false, default: 0, after: :nickname
    add_column :users, :profile, :string, limit: 1000, after: :email
    add_column :users, :eng_category, :integer, null: false, default: 1, after: :profile
    add_column :users, :years_experience, :integer, null: false, default: 0, after: :eng_category
    add_column :users, :company_id, :integer, null: false, default: 0, after: :years_experience

    remove_column :users, :nickname, :string
  end
end
