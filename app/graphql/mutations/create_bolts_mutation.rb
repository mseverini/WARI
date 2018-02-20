class Mutations::CreateBoltsMutation
  def call(_, args, _)
    args[:pitches].times do |pitch_count|
      args[:bolts][pitch_count].times do |bolt_count|
        Bolt.create(number: bolt_count, pitch: pitch_count, climbing_route_id: args[:route_id])
      end
      Anchor.create(pitch:pitch_count, climbing_route_id: args[:route_id]) if args[:anchors][pitch_count]
    end
    ClimbingRoute.find(args[:route_id])
  end
end
