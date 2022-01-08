# frozen_string_literal: true

class CreateWelfares < ActiveRecord::Migration[6.1]
  def change
    create_table :welfares do |t|
      t.integer :company_id, null: false
      t.integer :user_id, null: false
      t.string :content, null: false

      t.timestamps
    end
  end
end
