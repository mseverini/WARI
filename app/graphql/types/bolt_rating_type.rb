Types::BoltRatingType = GraphQL::ObjectType.define do
  name "BoltRating"
  field :rating, !types.String
  field :user, !types[Types::UserType]
  field :bolt, !types[Types::BoltType]
end
