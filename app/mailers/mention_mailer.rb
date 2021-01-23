class MentionMailer < ApplicationMailer
  def mention(article)
      @article = article
      @user = @article.user
      mail to: @user.email, subject: 'コメントが来ています'
  end
end
