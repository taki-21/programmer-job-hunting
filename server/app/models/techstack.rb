# frozen_string_literal: true

class Techstack < ApplicationRecord
  belongs_to :user
  belongs_to :company
  has_many :techstack_categories
  has_many :techcategories, through: :techstack_categories
end
