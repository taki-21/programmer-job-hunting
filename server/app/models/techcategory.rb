class Techcategory < ApplicationRecord
  has_many :company_teches
  has_many :companies, through: :company_teches
end
