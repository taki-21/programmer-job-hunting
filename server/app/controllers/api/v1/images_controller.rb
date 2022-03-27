class Api::V1::ImagesController < ApplicationController
  before_action :authenticate_api_v1_user!, only: [:create]
  
  def show
    @key = params[:id]
    @signed_url = Image.signed_url(@key, :get_object)
  end

  def create
    @key = SecureRandom.uuid
    @signed_url = Image.signed_url(@key, :put_object)
    render json: { signed_url: @signed_url , key: @key }
  end
end
