class Api::V1::LikesController < ApplicationController
  before_action :company_params

  def create
    Like.create(user_id: current_user.id, company_id: params[:id])
    # redirect_to companys_path
  end

  def destroy
    Like.find_by(user_id: current_user.id, company_id: params[:id]).destroy
    # redirect_to companys_path
  end

  private

    def company_params
      @company = Company.find(params[:id])
    end
end
