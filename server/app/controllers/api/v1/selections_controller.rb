# frozen_string_literal: true

module Api
  module V1
    class SelectionsController < ApplicationController
      def index
        selections = Selection.order(created_at: :desc)
        render json: { status: 200, selections: selections }
      end

      def show
        selection = Selection.where(company_id: params[:id])
        render json: { status: 200, selection: selection }
      end

      def create
        selection = Selection.new(selection_params)
        if selection.save
          render json: { status: 200, selection: selection }
        else
          render jdon: { status: 500, message: '作成に失敗しました' }
        end
      end

      private

      def selection_params
        params.permit(:company_id, :user_id, :selection_category, :content)
      end
    end
  end
end
