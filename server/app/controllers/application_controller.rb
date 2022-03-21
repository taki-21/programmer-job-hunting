# frozen_string_literal: true

class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include Pundit

  def pundit_user
    current_api_v1_user
  end

  # rescue_from Pundit::NotAuthorizedError, with: :render_403
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  protected

  def user_not_authorized
    render status: 403, json: { message: "You don't have permission." }
  end

  # def render_403
  #   render status: 403, json: { message: "You don't have permission." }
  # end
end
