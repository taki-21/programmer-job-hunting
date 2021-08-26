class Company < ApplicationRecord
  validates :company_name, presence: true, length: {maximum: 255}, uniqueness: true
  validates :company_address, presence: true, length: {maximum: 300}
  validates :conmany_overview, presence: true, length: {maximum: 2000}
end
