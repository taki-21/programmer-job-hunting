class Api::V1::CompaniesController < ApplicationController
    def index
        posts = Company.order(created_at: :desc)
        render json: { status: 'SUCCESS', message: 'Loaded posts', data: posts }
    end

    def create
        company = Company.new(company_params)
        
        if company.save
            render json: { status: 200, message: company }    
        else
            render json: { status: 500, message: "作成に失敗しました" }
        end
    end

    private

    def company_params
      params.require(:company).permit(:name, :adress, :overview)
    end
end
