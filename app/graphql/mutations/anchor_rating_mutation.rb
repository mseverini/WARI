class Mutations::AnchorRatingMutation
  def call(_, args, _)
    user = User.find_by(confirmation_token: args[:token])
    anchor = Anchor.find(args[:anchor_id])
    anchorRating = AnchorRating.where(user:user, anchor:anchor).first || AnchorRating.new
    anchorRating.user = user
    anchorRating.anchor = anchor
    anchorRating.rating = args[:rating] if args[:rating].present?
    anchorRating.picture = args[:picture] if args[:picture].present?
    anchorRating.save!
    anchorRating
  end
end
