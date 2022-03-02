class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :company_name
      t.text :company_address
      t.text :company_overview
      t.string :company_num_of_emp

      t.timestamps
    end
  end
end
