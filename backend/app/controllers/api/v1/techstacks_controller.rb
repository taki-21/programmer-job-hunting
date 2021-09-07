class Api::V1::TechstacksController < ApplicationController

    def index
        techstacks = Techstack.order(created_at: :desc)
        render json: {status: 200, techstacks: techstacks}
    end

    def show
        techstack = Techstack.where(company_id: params[:id])
        render json: {status: 200, techstack: techstack}
    end

    def create
        techstack = Techstack.new(techstack_params)
        if techstack.save
            render json: {status: 200, techstack: techstack}
        else
            render jdon: {status: 500, message: "作成に失敗しました"}
        end
    end

    private

    def techstack_params
        params.permit(:company_id, :user_id, :tech_category, :content)
    end
end
