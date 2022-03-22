class CompanyPolicy < ApplicationPolicy
  def pickup?
    true
  end

  def index?
    true
  end

  def search?
    true
  end

  def skill_search?
    true
  end

  def show?
    true
  end

  def create?
    # @user.admin == @user.recruiter == falseの場合はアカウントをリクルーター扱いにする
    if @user.admin == false && @user.recruiter == false
      @user.recruiter = true
    end
    @user.present? && (@user.admin || @user.recruiter)
  end

  def update?
    @user.present? && (@user.admin || @record.user == @user)
  end

  def destroy?
    @user.present? && (@user.admin || @record.user == @user)
  end

  class Scope < Scope
    # NOTE: Be explicit about which records you allow access to!
    def resolve
      scope.all
    end
  end
end
