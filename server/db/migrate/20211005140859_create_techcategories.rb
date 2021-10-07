class CreateTechcategories < ActiveRecord::Migration[6.1]
  def change
    create_table :techcategories do |t|
      t.string :category_name, null: false, unique: true
      t.timestamps
    end
  end
end
