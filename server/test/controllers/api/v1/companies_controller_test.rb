# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    module Auth
      class CompaniesControllerTest < ActionDispatch::IntegrationTest
        def setup
          @company = companies(:company1)
        end

        test 'should create company' do
          assert_difference 'Company.count', 1 do
            post api_v1_companies_path, params: {
              companies: {
                company_name: 'hogehoge',
                company_overview: 'a' * 40,
                company_address: 'b' * 60,
                company_num_of_emp: '500-900'
              }
            }
          end
          assert_response :created
        end

        test 'should delete company' do
          assert_difference 'Company.count', 1 do
            post api_v1_companies_path, params: {
              companies: {
                company_name: 'hogehoge',
                company_overview: 'a' * 40,
                company_address: 'b' * 60,
                company_num_of_emp: '500-900'
              }
            }
          end
          assert_response :created

          company = companies(:company1)
          assert_difference 'Company.count', -1 do
            delete api_v1_company_path(company)
          end
          assert_response :no_content
        end
      end
    end
  end
end
