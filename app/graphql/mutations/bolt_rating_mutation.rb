class Mutations::BoltRatingMutation
  def call(_, args, _)
    user = User.find_by(confirmation_token: args[:token])
    bolt = Bolt.find(args[:bolt_id])
    boltRating = BoltRating.where(user:user, bolt:bolt).first || BoltRating.new
    byebug
    boltRating.user = user
    boltRating.bolt = bolt
    boltRating.rating = args[:rating]
    boltRating.save
    boltRating
  end
end
