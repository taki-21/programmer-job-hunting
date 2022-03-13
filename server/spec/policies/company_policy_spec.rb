require 'rails_helper'

RSpec.describe CompanyPolicy, type: :policy do
  let(:user) { create(:user) }
  let(:admin_user) { create(:user, admin: true) }
  let(:recruiter_user) { create(:user, recruiter: true) }
  let(:company) { create(:company) }

  subject { described_class }

  permissions :index?, :search?, :skill_search?, :show? do
    it '未ログインの時に許可' do
      expect(subject).to permit(nil, company)
    end
  end

  permissions :create? do
    it "未ログインの時に不許可" do
      expect(subject).not_to permit(nil, company)
    end
    it "一般ユーザーでログインしている時に不許可" do
      expect(subject).to permit(user, company)
    end
    it 'adminユーザーでログインしている時に許可' do
      expect(subject).to permit(admin_user, company)
    end
    it 'recruiterユーザーでログインしている時に許可' do
      expect(subject).to permit(recruiter_user, company)
    end
  end

  permissions :update?, :destroy? do
    it "未ログインの時に不許可" do
      expect(subject).not_to permit(nil, company)
    end
    it 'adminユーザーでログインしている時に許可' do
      expect(subject).to permit(admin_user, company)
    end
    it "ログインしているが別ユーザーの時に不許可" do
      expect(subject).not_to permit(user, company)
    end
    it "ログインしていて同一ユーザーの時に許可" do
      company.user = user
      expect(subject).to permit(user, company)
    end
  end
end
