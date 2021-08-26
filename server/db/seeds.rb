# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

100.times do |n|
  company_name = "company-#{n+1}"
  company_address =  "東京都品川区 #{n+1}丁目"
  company_overview = "会社説明 #{n+1}"
  company_num_of_emp = "#{n*100} - #{(n+1)*100}"
  
  Company.create!(
    company_name: company_name,
    company_address: company_address,
    company_overview: company_overview,
    company_num_of_emp: company_num_of_emp
    )
end
