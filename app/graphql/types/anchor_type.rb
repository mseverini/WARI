Types::AnchorType = GraphQL::ObjectType.define do
  name "Anchor"
  field :ids, !types.ID
  field :pitch, !types.Int
end
