class Api::V1::UsersController < ApplicationController
    before_action :set_user, only: %i[show update]

    def show
        render json: { status: 200, user: @user }
    end

    def update
        @user.name = user_params[:name]
        @user.email = user_params[:email]
        @user.gender = user_params[:gender]
        @user.eng_category = user_params[:eng_category]
        @user.years_experience = user_params[:years_experience]
        @user.profile = user_params[:profile]
        # @user.company_id = user_params[:company_id]

        render json: { status:200, user: @user, user_params: user_params[:name]}
        # if @user.update(user_params)
        #     render json: { status: 200, user: @user }
        # else
        #     render json: { status: 500, message: "更新に失敗しました" }
        # end
    end

    private

    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:name, :email, :gender, :eng_category, :years_experience, :profile, :company_id)
    end
end
