# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts 'Creating Company...'

Company.create(name: "freee", adress: "gotanda", overview: "SaaS Company")
Company.create(name: "photoruction", adress: "nihonbashi", overview: "SaaS Company")
Company.create(name: "sansan", adress: "omotesando", overview: "SaaS Company")

puts '...Finished!'