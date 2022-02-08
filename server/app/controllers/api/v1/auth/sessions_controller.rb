# frozen_string_literal: true

module Api
  module V1
    module Auth
      class SessionsController < ApplicationController
        def index
          if current_api_v1_user
            render json: current_api_v1_user
          else
            render json: { status: 500, message: 'ユーザーが存在しません' }
          end
        end
      end
    end
  end
end
