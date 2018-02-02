Types::ClimbingRouteType = GraphQL::ObjectType.define do
  name "route"
  field :id, !types.ID
  field :name, !types.String
  field :bolts, -> { !types[Types::BoltType] }
end
