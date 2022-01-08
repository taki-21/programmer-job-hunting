# frozen_string_literal: true

class CreateCompanyTeches < ActiveRecord::Migration[6.1]
  def change
    create_table :company_teches do |t|
      t.references :company, null: false, foreign_key: true
      t.references :techcategory, null: false, foreign_key: true

      t.timestamps
    end
  end
end
