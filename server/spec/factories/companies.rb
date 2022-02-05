FactoryBot.define do
  factory :company do
    sequence(:company_name) { |n| "company_#{n}" }
    company_overview { 'sample_overview' }
    company_address { 'sample_address' }
    company_num_of_emp { '100-150' }
    company_image {}
    user
  end
end
