class Company < ApplicationRecord
    has_many :users
    has_many :techstacks, dependent: :destroy
    has_many :incomes, dependent: :destroy
    has_many :welfares, dependent: :destroy
    has_many :selections, dependent: :destroy
end
