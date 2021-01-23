class Comment < ApplicationRecord
  belongs_to :article

  validates :content, presence: true

  after_create :send_email

  private
  def send_email

      MentionMailer.mention(article).deliver_later

  end

end
