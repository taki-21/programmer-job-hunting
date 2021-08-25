require 'test_helper'

class UserSignupTestTest < ActionDispatch::IntegrationTest
  
  test "signup with invalid information" do
    assert_no_difference "User.count" do
      post api_v1_user_registration_path, params: {
        user: {
          name: "test",
          email: "test@gmail.com",
          password: "",
          password_confirmation: ""
        }
      }
    end
    assert_response :unprocessable_entity
  end


  test "signup with valid information" do
    assert_difference "User.count" do
      post api_v1_user_registration_path, params: {
        user: {
          name: "test",
          email: "test@gmail.com",
          password: "password",
          password_confirmation: "password"
        }
      }
    end
    assert_response :ok
  end
end
