Types::BoltType = GraphQL::ObjectType.define do
  name "Bolt"
  field :id, !types.ID
  field :number, !types.Int
  field :pitch, !types.Int
end
