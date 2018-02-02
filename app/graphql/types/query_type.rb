Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :bolt, Types::BoltType do
    resolve ->(obj, args, ctx) {
      Bolt.all
    }
  end

  field :route, Types::ClimbingRouteType do
    argument :id, !types.ID
    resolve ->(obj, args, ctx) {
      ClimbingRoute.find(args['id'])
    }
  end

  field :area, Types::AreaType do
    argument :id, !types.ID
    resolve ->(obj, args, ctx) {
      Area.find(args['id'])
    }
  end
end
