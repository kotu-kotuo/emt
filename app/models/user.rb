class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :username, uniqueness: true

  has_many :articles, dependent: :destroy

  has_many :likes, dependent: :destroy
  has_many :favorite_articles, through: :likes, source: :article

  has_one :profile, dependent: :destroy

  def prepare_profile
    profile || build_profile
  end

end
