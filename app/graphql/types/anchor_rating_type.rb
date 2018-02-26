Types::AnchorRatingType = GraphQL::ObjectType.define do
  name "AnchorRating"
  field :rating, types.Int
  field :user, !types[Types::UserType]
  field :anchor, !types[Types::AnchorType]
  field :picture, types.String
end
