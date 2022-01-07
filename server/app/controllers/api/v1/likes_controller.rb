class Api::V1::LikesController < ApplicationController

  def index
    likes = Like.where(company_id: params[:company_id])
    render json: likes
  end

  def create
    Like.create(user_id: params[:user_id], company_id: params[:company_id])
  end

  def destroy
    Like.find_by(user_id: params[:user_id], company_id: params[:company_id]).destroy
  end
end