# frozen_string_literal: true

class Selection < ApplicationRecord
  belongs_to :user
  belongs_to :company
end
