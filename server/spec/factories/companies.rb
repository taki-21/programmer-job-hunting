FactoryBot.define do
  factory :company do
    sequence(:company_name) { |n| "company_#{n}" }
    company_overview { 'aaa' }
    company_address { 'aaa' }
    company_num_of_emp { '100' }
    company_image {}
    association :user
  end
end
