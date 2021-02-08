class Profile < ApplicationRecord
  validates :avatar, presence: true
  belongs_to :user
  has_one_attached :avatar
end
