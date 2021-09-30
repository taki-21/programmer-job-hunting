class Company < ApplicationRecord
  has_one_attached :company_image
  has_many :users
  has_many :techstacks, dependent: :destroy
  has_many :incomes, dependent: :destroy
  has_many :welfares, dependent: :destroy
  has_many :selections, dependent: :destroy
  validates :company_name, presence: true, length: {maximum: 255}, uniqueness: true
  validates :company_address, presence: true, length: {maximum: 300}
  validates :company_overview, presence: true, length: {maximum: 2000}

  def self.search(search)
      if search
        Company.where('company_name LIKE(?)', "%#{search}%")
      else
        Company.all
      end
    end
end
