class BoltRatingsController < ApplicationController
  before_action :set_climbing_route, only: [:show, :edit, :update, :destroy]

  # GET /climbing_routes
  # GET /climbing_routes.json
  def index
    @bolt_ratings = BoltRating.all.order(:rating)
  end

  # GET /climbing_routes/1
  # GET /climbing_routes/1.json
  def show
  end
end
