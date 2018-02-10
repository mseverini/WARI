class Mutations::Users::LoginUserMutation
  def call(_, args, _)
    creds = args[:credentials]
    user = User.find_by(email: creds[:email])
    raise GraphQL::ExecutionError.new("Invalid user") unless user.sign_in(creds[:password])

    OpenStruct.new({
        token: user.confirmation_token,
        user: user
      })
  rescue ActiveRecord::RecordNotFound => e
    raise GraphQL::ExecutionError.new("Invalid user")
  end
end
