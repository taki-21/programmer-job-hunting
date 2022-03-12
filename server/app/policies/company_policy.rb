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
    @user.present? && !@user.recruiter
  end

  def update?
    @record.user == @user && !@user.recruiter
  end

  def destroy?
    @record.user == @user && !@user.recruiter
  end
  class Scope < Scope
    # NOTE: Be explicit about which records you allow access to!
    def resolve
      scope.all
    end
  end
end
