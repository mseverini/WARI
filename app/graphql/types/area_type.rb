Types::AreaType = GraphQL::ObjectType.define do
  name "Area"
  field :id, !types.ID
  field :name, !types.String
  field :climbing_routes, -> { !types[Types::ClimbingRouteType] }
  field :children,  -> { !types[Types::AreaType] }
end
