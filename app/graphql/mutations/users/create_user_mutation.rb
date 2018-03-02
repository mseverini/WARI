class Mutations::Users::CreateUserMutation
  def call(obj, args, ctx)
    creds = args[:credentials]
    user = User.new(email: creds[:email], password: creds[:password])
    user.remember_token = user.generate_token
    user.save

    user.sign_in(creds[:password])
    OpenStruct.new({
                       token: user.confirmation_token,
                       user: user
                   })

  rescue ActiveRecord::RecordInvalid => e
    raise GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
  end
end
