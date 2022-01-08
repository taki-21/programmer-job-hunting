# frozen_string_literal: true

class CompanyTech < ApplicationRecord
  belongs_to :company
  belongs_to :techcategory
end
