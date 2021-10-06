class Techcategory < ApplicationRecord
  has_many :company_teches
  has_many :companies, through: :company_teches
  has_many :techstack_categories
  has_many :teckstacks, through: :techstack_categories
end
