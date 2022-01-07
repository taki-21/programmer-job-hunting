# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dummy_address1 = %w[品川区 豊島区 新宿区 千代田区 荒川区 港区 江戸川区 中央区 杉並区 練馬区 足立区 葛飾区]
dummy_tech = ['Go', 'TypeSctipt', 'JavaScript', 'Dart', 'ruby', 'Python', 'C言語', 'C++', 'Java', 'Swift', 'Object-C', 'Rust', 'C#',
              '', '', '']

1000.times do |n|
  company_name = "company-#{n + 1}"
  company_address =  "東京都#{rand(0..dummy_address1.length)} #{n + 1}丁目"
  company_overview = "会社説明 #{n + 1}"
  company_num_of_emp = "#{n * 100} - #{(n + 1) * 100}"

  Company.create!(
    company_name: company_name,
    company_address: company_address,
    company_overview: company_overview,
    company_num_of_emp: company_num_of_emp
  )
end

dummy_tech.length.times do |n|
  Techcategory.create!(
    category_name: dummy_tech[n]
  )
end

# 上で生成した100社のCompanyTechテーブルのダミーデータを作成する
100.times do |n|
  CompanyTech.create!(
    company_id: n + 1,
    techcategory_id: rand(0..dummy_tech.length - 1)
  )
end
