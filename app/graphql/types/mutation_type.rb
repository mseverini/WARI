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

  field :createBoltRating, Types::BoltRatingType do
    description "Sets the user bolt rating"
    argument :token, !types.String
    argument :bolt_id, !types.ID
    argument :rating, !types.String
    resolve Mutations::BoltRatingMutation.new
  end

  field :createBolts, Types::ClimbingRouteType do
    description "adds bolts to a route"
    argument :pitches, !types.Int
    argument :bolts,  -> { !types[!types.Int] }
    argument :route_id, !types.ID
    resolve Mutations::CreateBoltsMutation.new
  end
end
