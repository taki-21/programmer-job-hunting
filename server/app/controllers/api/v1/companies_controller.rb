class Api::V1::CompaniesController < ApplicationController

  # TOPページに表示する会社
  def index
    companies = Company.first(5)
    render json: companies
  end

  def search
    companies = Company.all.page(params[:page])
    render json: companies
  end

  def create
    @company = Company.new(companies_params)
    if @company.save
      render status: :created, json: {message: "update success"}
    else
      render status: :conflict, json: {message: "update failed"}
    end
  end

  # 会社詳細情報
  def show
    @company = Company.find(params[:id])
    render json: @company
  end

  def update
    @company = Company.find(params[:id])
    if @company.update(companies_params)
      render status: :created, json: {message: "update success"}
    else
      render status: :conflict, json: {message: "update failed"}
    end
  end

  def destroy
    Company.find(params[:id]).destroy
  end

  private

    def companies_params
      params.require(:companies).permit(:company_name, :company_overview,:company_address, :company_num_of_emp)
    end

end
