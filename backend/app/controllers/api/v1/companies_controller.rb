class Api::V1::CompaniesController < ApplicationController
    before_action :set_company, only: [:show, :update]

    def index
        companies = Company.order(created_at: :desc)
        render json: { status: 200, companies: companies }
    end

    def create
        company = Company.new(company_params)
        
        if company.save
            render json: { status: 200, company: company }    
        else
            render json: { status: 500, message: "作成に失敗しました" }
        end
    end

    def show
        render json: { status: 200, company: @company } 
    end

    def update
        @company.name = company_params[:name]
        @company.adress = company_params[:adress]
        @company.overview = company_params[:overview]
        if @company.save
            render json: {status: 200, company: @company }
        else
            render json: { status: 500, message: "更新に失敗しました" }
        end
    end

    private

    def set_company
        @company = Company.find(params[:id])
    end

    def company_params
        params.require(:company).permit(:name, :adress, :overview)
    end
end
