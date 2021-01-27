class Article < ApplicationRecord

  validates :content, {presence: true, length: {maximum: 50}}

  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many_attached :images
end
