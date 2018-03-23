class BoltRatingsController < ApplicationController
  def index
    @bolt_ratings = BoltRating.all.order(:rating)
  end

  def show
  end
end
