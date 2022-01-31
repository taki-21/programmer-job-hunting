FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "test#{n}@example.com" }
    name {'yamada'}
    password {'password'}
    password_confirmation {'password'}
  end
end
