FactoryBot.define do

  factory :user do
    email { Faker::Internet.email }
    password { 'password' }
    username { Faker::Lorem.characters(number: 7) }
  end

end
