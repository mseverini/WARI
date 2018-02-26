Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :bolt, Types::BoltType do
    resolve ->(obj, args, ctx) {
      Bolt.all
    }
  end

  field :anchor, Types::AnchorType do
    resolve ->(obj, args, ctx) {
      Anchor.all
    }
  end

  field :bolt_rating, Types::BoltRatingType do
    argument :token, !types.String
    argument :bolt_id, !types.ID
    resolve ->(obj, args, ctx) {
      user = User.where(confirmation_token: args['token'])
      BoltRating.where(user: user, bolt_id: args['bolt_id']).first
    }
  end

  field :anchor_rating, Types::AnchorRatingType do
    argument :token, !types.String
    argument :anchor_id, !types.ID
    resolve ->(obj, args, ctx) {
      user = User.where(confirmation_token: args['token'])
      AnchorRating.where(user: user, anchor_id: args['anchor_id']).first
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
