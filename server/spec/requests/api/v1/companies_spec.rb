require 'rails_helper'

RSpec.describe "Api::V1::Companies", type: :request do
  describe "Company API" do
    it '会社一覧を取得する' do
      FactoryBot.create_list(:company, 10)

      get '/api/v1/companies'
      data = JSON.parse(response.body)

      # リクエスト成功を表す200が返ってきたかを確認する
      expect(response.status).to eq(200)

      # 正しい数のデータが返されたかを確認する
      expect(data.length).to eq(10)
    end

    it '会社詳細を取得する' do
      company = FactoryBot.create(:company)

      get "/api/v1/companies/#{company.id}"

      data = JSON.parse(response.body)

      # リクエスト成功を表す200が返ってきたか確認する。
      expect(response.status).to eq(200)

      # 要求した特定のポストのみ取得した事を確認する
      expect(data['company_name']).to eq(company.company_name)
    end

    it '会社を新規作成する' do
      user = FactoryBot.create(:user)
      # ログイン
      login user
      valid_params = {company_name: 'sample_company', company_overview: 'sample_company_overview', company_address: 'shibuya', company_num_of_emp: '100'}

      # データが作成されていることを確認
      post '/api/v1/companies', params: {company: valid_params}

      expect(Company.all.count).to eq 1

      # リクエスト成功を表す200が返ってきたか確認
      expect(response.status).to eq 200
    end
  end
end
