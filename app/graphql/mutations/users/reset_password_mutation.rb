class Mutations::Users::ResetPasswordMutation
  def call(obj, args, ctx)
    email = args[:email]
    code = args[:code]
    user = User.where(email: email, password_token: code)
    raise GraphQL::ExecutionError.new("The code you have entered has expired.") unless user&.password_token_date > 30.minutes.ago
    user.password = args[:password]
    user.save

    OpenStruct.new({
                       token: user.confirmation_token,
                       user: user
                   })

  rescue ActiveRecord::RecordInvalid => e
    raise GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
  end
end
