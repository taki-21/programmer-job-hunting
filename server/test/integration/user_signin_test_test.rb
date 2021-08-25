require 'test_helper'

class UserSigninTestTest < ActionDispatch::IntegrationTest
  

  test "signin after signup" do
    assert_difference "User.count" do
      post api_v1_user_registration_path, params: {
        user: {
          name: "signup test",
          email: "signup@gmail.com",
          password: "password",
          password_confirmation: "password"
        }
      }
    end
    assert_response :ok

    # サインアップ後に同じ情報を用いてログインできるか調べる
    post api_v1_user_session_path, params: {
      email: "signup@gmail.com",
      password: "password",
    }
    assert_response :ok

  end

  test "signin with valid email/invalid password" do
    post api_v1_user_session_path, params: {
      email: "signup@gmail.com",
      password: "wrong_password",
    }
    assert_response :unauthorized
  end


end
