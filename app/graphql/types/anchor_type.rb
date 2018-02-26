Types::AnchorType = GraphQL::ObjectType.define do
  name "Anchor"
  field :id, !types.ID
  field :pitch, !types.Int
end
