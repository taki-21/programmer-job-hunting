class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.string :adress, null: false
      t.string :overview, null: false
      t.timestamps
    end
  end
end
