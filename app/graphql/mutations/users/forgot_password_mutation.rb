class Mutations::Users::ForgotPasswordMutation
  def call(obj, args, ctx)
    email = args[:email]
    user = User.where(email: email)
    user.password_token = user.generate_token
    user.password_token_date = Time.now
    user.save

    true

  rescue ActiveRecord::RecordInvalid => e
    raise GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
  end
end
