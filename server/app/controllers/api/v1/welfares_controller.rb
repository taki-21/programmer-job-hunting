# frozen_string_literal: true

module Api
  module V1
    class WelfaresController < ApplicationController
      def index
        welfares = Welfare.order(created_at: :desc)
        render json: welfares
      end

      def show
        welfare = Welfare.where(company_id: params[:id])
        render json: welfare
      end

      def create
        welfare = Welfare.new(welfare_params)
        if welfare.save
          render json: welfare
        else
          render jdon: { status: 500, message: '作成に失敗しました' }
        end
      end

      private

      def welfare_params
        params.permit(:company_id, :user_id, :content)
      end
    end
  end
end
