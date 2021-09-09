class Company < ApplicationRecord
  has_one_attached :company_image
  validates :company_name, presence: true, length: {maximum: 255}, uniqueness: true
  validates :company_address, presence: true, length: {maximum: 300}
  validates :company_overview, presence: true, length: {maximum: 2000}
end
