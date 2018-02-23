Types::BoltRatingType = GraphQL::ObjectType.define do
  name "BoltRating"
  field :rating, types.Int
  field :user, !types[Types::UserType]
  field :bolt, !types[Types::BoltType]
  field :picture, types.String
end
