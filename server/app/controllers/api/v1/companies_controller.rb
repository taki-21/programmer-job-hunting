class Api::V1::CompaniesController < ApplicationController
  #before_action :post_params, only: [:create]

  # TOPページに表示する会社
  # def index
  #   companies = Company.first(5)
  #   render json: companies
  # end
  def index
    if params[:keyword].present?
      companies = Company.where(company_name: params[:keyword])
    else
      companies = Company.order(created_at: :desc)
    end
    render json: { status: 200, companies: companies }
  end

  def pickup
    companies = Company.order("RAND()").limit(5)
    render json: { status: 200, companies: companies }
  end




  # def search
  #   companies = Company.page(params[:id] ||= 1).per(10).order('created_at ASC')
  #   render json: companies
  # end

  def create
    puts "@@"*20
    puts params
    puts "@@"*20
    @company = Company.create post_params
    if @company.save!
      render status: :created, json: {message: "create success"}
    else
      render status: :conflict, json: {message: "create failed"}
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

    def post_params
      params.require(:companies).permit(:company_name, :company_overview,:company_address, :company_num_of_emp,:company_image)
    end

    def companies_params
      params.require(:companies).permit(:company_name, :company_overview,:company_address, :company_num_of_emp,:company_image)
    end

end
