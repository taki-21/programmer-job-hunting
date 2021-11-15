# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dummy_address1 = ['品川区','豊島区','新宿区','千代田区','荒川区','港区','江戸川区','中央区','杉並区','練馬区','足立区','葛飾区'];


dummy_tech = ['Go','TypeSctipt','JavaScript','Dart','ruby','Python','C言語','C++','Java','Swift','Object-C','Rust','C#','','','',]

dummy_tech.length.times do |n|
  Techcategory.create!(
    category_name: dummy_tech[n]
  )
end
print("ok")
a = Techcategory.all
print(a)
# 上で生成した100社のCompanyTechテーブルのダミーデータを作成する
100.times do |n|

  CompanyTech.create!(
    company_id: n+1,
    techcategory_id: rand(0..dummy_tech.length-1)
  )
end
