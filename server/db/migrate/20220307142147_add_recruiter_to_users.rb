class AddRecruiterToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :recruiter, :boolean, after: :admin, default: false
  end
end
