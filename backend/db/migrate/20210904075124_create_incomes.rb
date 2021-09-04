class CreateIncomes < ActiveRecord::Migration[6.1]
  def change
    create_table :incomes do |t|
      t.integer :company_id, null: false
      t.integer :user_id, null: false
      t.integer :income, null: false
      t.string :content, null: false
      t.timestamps
    end
  end
end
