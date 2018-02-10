Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createUser, Types::AuthenticateType do
    description "Creates a new user"
    argument :credentials, Types::AuthProviderCredentialsType
    resolve Mutations::Users::CreateUserMutation.new
  end

  field :loginUser, Types::AuthenticateType do
    description "Logs in a user"
    argument :credentials, Types::AuthProviderCredentialsType
    resolve Mutations::Users::LoginUserMutation.new
  end
end
