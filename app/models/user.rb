class User < ApplicationRecord
  include Clearance::User
  has_secure_password
  has_secure_token :api_token
end
