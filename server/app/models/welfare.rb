# frozen_string_literal: true

class Welfare < ApplicationRecord
  belongs_to :user
  belongs_to :company
end
