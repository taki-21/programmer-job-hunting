class LikePolicy < ApplicationPolicy
  def index?
    true
  end

  def create?
    @user.present? && !@user.recruiter
  end

  def destroy?
    @user.present? && !@user.recruiter
  end
  class Scope < Scope
    # NOTE: Be explicit about which records you allow access to!
    def resolve
      scope.all
    end
  end
end
