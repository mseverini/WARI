class User < ApplicationRecord
  #include Clearance::User
  # include Clearance::User::ClassMethods

  include ActiveModel::ForbiddenAttributesProtection
  include ActiveModel::SecurePassword

  validates_uniqueness_of :email

  has_secure_password
  has_secure_token :confirmation_token

  def sign_in(password)
    # Only generate token if the user isn't signed in
    if authenticate(password)
      generate_token unless signed_in?
      save!
      return true
    end
    false
  end

  def sign_out
    if signed_in?
      erase_token
      save!
    else
      false
    end
  end

  def signed_in?
    not confirmation_token.nil?
  end

  def erase_token
    self.confirmation_token = nil
  end

  def generate_token
    # pseudo random numbers with 16 bits has almost zero chance of have collisions
    self.confirmation_token = SecureRandom.urlsafe_base64(16)
  end
end
