class CompanyPolicy < ApplicationPolicy
  def pickup?
    @user.present? && (@user.admin || @user.recruiter)
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
    @user.present? && (@user.admin || @user.recruiter)
  end

  def update?
    @user.present? && (@user.admin || @user.recruiter)
  end

  def destroy?
    @user.present? && (@user.admin || @user.recruiter)
  end

  class Scope < Scope
    # NOTE: Be explicit about which records you allow access to!
    def resolve
      scope.all
    end
  end
end
