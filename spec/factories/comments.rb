FactoryBot.define do

    factory :comment do
      content { Faker::Lorem.characters(number: 50) }
    end
end
