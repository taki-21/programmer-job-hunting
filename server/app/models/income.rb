# frozen_string_literal: true

class Income < ApplicationRecord
  belongs_to :user
  belongs_to :company
end
