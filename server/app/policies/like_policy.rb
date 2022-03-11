class LikePolicy < ApplicationPolicy
  def create?
    user.recruiter?
  end

  def destroy?
    user.recruiter?
  end
end
