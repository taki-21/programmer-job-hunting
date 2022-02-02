require 'rails_helper'

RSpec.describe "Api::V1::Likes", type: :request do
  describe "Like API" do
    it "お気に入りの新規作成" do
      # ログイン
      user = FactoryBot.create(:user)
      login user
      company = FactoryBot.create(:company)
      post "/api/v1/companies/#{company.id}/likes"

      data = JSON.parse(response.body)

      # リクエスト成功を表す200が返ってきたかを確認する
      expect(response.status).to eq(200)

      expect(data['user_id']).to eq(user.id)
      expect(data['company_id']).to eq(company.id)
    end

    it "会社を指定した会社に登録されたお気に入り一覧を取得" do
      # ログイン
      user = FactoryBot.create(:user)
      login user

      # 会社1件新規投稿
      company = FactoryBot.create(:company)
      post "/api/v1/companies/#{company.id}/likes"
      get "/api/v1/companies/#{company.id}/likes"
      data = JSON.parse(response.body)

      # リクエスト成功を表す200が返ってきたかを確認する
      expect(response.status).to eq(200)

      # 正しい数のデータが返されたかを確認する
      expect(data.length).to eq(1)
    end
  end
end
