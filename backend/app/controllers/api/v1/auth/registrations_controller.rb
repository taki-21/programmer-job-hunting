class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  private

    def sign_up_params
      params.permit(:email, :password, :password_confirmation, :name, :gender, :profile, :eng_category, :years_experience)
    end
end