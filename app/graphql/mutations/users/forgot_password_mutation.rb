class Mutations::Users::ForgotPasswordMutation
  def call(obj, args, ctx)
    email = args[:email]
    user = User.where(email: email).first
    if user
      user.password_token = user.generate_password_token
      user.password_token_date = Time.now
      user.save
      true
    else
      true
    end

  rescue ActiveRecord::RecordInvalid => e
    raise GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
  end
end
