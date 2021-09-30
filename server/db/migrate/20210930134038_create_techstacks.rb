class CreateTechstacks < ActiveRecord::Migration[6.1]
  def change
    create_table :techstacks do |t|
      t.integer :company_id, null: false
      t.integer :user_id, null: false
      t.integer :tech_category, null: false
      t.string :content, null: false
      t.timestamps
    end
  end
end
