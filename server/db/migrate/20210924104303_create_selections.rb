class CreateSelections < ActiveRecord::Migration[6.1]
  def change
    create_table :selections do |t|
      t.integer :company_id, null: false
      t.integer :user_id, null: false
      t.integer :selection_category, null: false
      t.string :content, null: false

      t.timestamps
    end
  end
end
