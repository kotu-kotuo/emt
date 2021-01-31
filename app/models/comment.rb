class Comment < ApplicationRecord

  validates :content, {presence: true, length: {maximum: 50}}

  belongs_to :article
  belongs_to :user

  after_create :send_email

  private
  def send_email
      MentionMailer.mention(article).deliver_later
  end
end
