# frozen_string_literal: true

class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include Pundit

  def pundit_user
    current_api_v1_user
  end
end
