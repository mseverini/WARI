Types::BoltType = GraphQL::ObjectType.define do
  name "Bolt"
  field :ids, !types.ID
  field :number, !types.String
end
