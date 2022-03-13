# frozen_string_literal: true

module Api
  module V1
    class LikesController < ApplicationController
      before_action :authenticate_api_v1_user!, only: %i[create destroy]
      def index
        likes = Like.where(company_id: params[:company_id])
        authorize likes
        render json: likes
      end

      def create
        authorize Like
        like = Like.new(user_id: current_api_v1_user.id, company_id: params[:company_id])
        if like.save
          render json: like
        else
          render json: { status: :bad_request, errors: like.errors.messages }
        end
      end

      def destroy
        authorize Like
        like = Like.find_by(user_id: current_api_v1_user.id, company_id: params[:company_id])
        if like.destroy
          render json: like
        else
          render json: { status: :bad_request, errors: like.errors.messages }
        end
      end
    end
  end
end
