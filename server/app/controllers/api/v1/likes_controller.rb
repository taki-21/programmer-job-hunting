class Api::V1::LikesController < ApplicationController

  def index
    likes = Like.where(company_id: params[:company_id])
    render json: likes
  end

  def create
    Like.create(user_id: current_user.id, company_id: params[:id])
    # redirect_to companys_path
  end

  def destroy
    Like.find_by(user_id: current_user.id, company_id: params[:id]).destroy
    # redirect_to companys_path
  end
end
