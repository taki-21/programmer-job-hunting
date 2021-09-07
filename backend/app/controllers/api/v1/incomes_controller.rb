class Api::V1::IncomesController < ApplicationController
    def index
        incomes = Income.order(created_at: :desc)
        render json: {status: 200, incomes: incomes}
    end

    def show
        income = Income.where(company_id: params[:id])
        render json: {status: 200, income: income}
    end

    def create
        income = Income.new(income_params)
        if income.save
            render json: {status: 200, income: income}
        else
            render jdon: {status: 500, message: "作成に失敗しました"}
        end
    end

    private

    def income_params
        params.permit(:company_id, :user_id, :income, :content)
    end
end
