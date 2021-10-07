class CreateTechstackCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :techstack_categories do |t|
      t.references :techstack, null: false, foreign_key: true
      t.references :techcategory, null: false, foreign_key: true

      t.timestamps
    end
  end
end
