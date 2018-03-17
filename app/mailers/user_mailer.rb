class UserMailer < ApplicationMailer

  def forgot_password_mailer(user)
    @user = user
    mail(to: @user.email, subject: 'WARI password code')
  end
end
