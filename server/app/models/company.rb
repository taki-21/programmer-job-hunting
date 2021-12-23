class Company < ApplicationRecord
  has_one_attached :company_image
  belongs_to :user
  has_many :techstacks, dependent: :destroy
  has_many :incomes, dependent: :destroy
  has_many :welfares, dependent: :destroy
  has_many :selections, dependent: :destroy
  has_many :company_teches
  has_many :techcategories, through: :company_teches
  has_many :likes


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

  # まずはtechCategoryテーブルから該当する技術のidを取得
  # -> 中間テーブルからそのスキルを持つ会社のIDを取得
  # -> 会社のリストを返却する
  def self.skillSearch(skill)
    if skill != ''
      Techcategory.join(:company_teches).join(:companies).where(['category_name','%#{skill}%'])
    else
      Company.per(10).order(created_at: :desc)
    end
  end
end
