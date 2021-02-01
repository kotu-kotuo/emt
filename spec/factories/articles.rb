FactoryBot.define do
    factory :article do
        content { Faker::Lorem.characters(number: 50) }
        after(:build) do |article|
            article.images.attach(io: File.open(Rails.root.join('spec', 'fixtures', 'images', 'avatar1.png')), filename: 'avatar1.png', content_type: 'image/png')
        end
    end
end
