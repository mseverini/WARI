class Mutations::BoltRatingMutation
  def call(_, args, _)
    user = User.find_by(token: args[:token])
    bolt = Bolt.find(args[:bolt_id])
    boltRating = BoltRating.where(user:user, bolt:bolt) || BoltRating.new
    boltRating.user = user
    boltRating.bolt = bolt
    boltRating.rating = args[:rating]
    boltRating.save
  end
end
