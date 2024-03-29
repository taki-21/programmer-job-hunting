# frozen_string_literal: true

class AddUserIdToCompanies < ActiveRecord::Migration[6.1]
  def change
    add_reference :companies, :user, foreign_key: true
  end
end
