class CompanyPolicy < ApplicationPolicy
  def create?
    user.admin? or user.recruiter?
  end
  def update?
    user.admin? or user.recruiter?
  end
  def destroy?
    user.admin?
  end
end
