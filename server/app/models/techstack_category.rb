# frozen_string_literal: true

class TechstackCategory < ApplicationRecord
  belongs_to :techstack
  belongs_to :techcategory
end
