class ClimbingRoutesController < ApplicationController
  before_action :set_climbing_route, only: [:show, :edit, :update, :destroy]

  # GET /climbing_routes
  # GET /climbing_routes.json
  def index
    @climbing_routes = ClimbingRoute.all
  end

  # GET /climbing_routes/1
  # GET /climbing_routes/1.json
  def show
  end

  # GET /climbing_routes/new
  def new
    @climbing_route = ClimbingRoute.new
  end

  # GET /climbing_routes/1/edit
  def edit
  end

  # POST /climbing_routes
  # POST /climbing_routes.json
  def create
    @climbing_route = ClimbingRoute.new(climbing_route_params)

    respond_to do |format|
      if @climbing_route.save
        format.html { redirect_to @climbing_route, notice: 'Climbing route was successfully created.' }
        format.json { render :show, status: :created, location: @climbing_route }
      else
        format.html { render :new }
        format.json { render json: @climbing_route.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /climbing_routes/1
  # PATCH/PUT /climbing_routes/1.json
  def update
    respond_to do |format|
      if @climbing_route.update(climbing_route_params)
        format.html { redirect_to @climbing_route, notice: 'Climbing route was successfully updated.' }
        format.json { render :show, status: :ok, location: @climbing_route }
      else
        format.html { render :edit }
        format.json { render json: @climbing_route.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /climbing_routes/1
  # DELETE /climbing_routes/1.json
  def destroy
    @climbing_route.destroy
    respond_to do |format|
      format.html { redirect_to climbing_routes_url, notice: 'Climbing route was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_climbing_route
      @climbing_route = ClimbingRoute.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def climbing_route_params
      params.require(:climbing_route).permit(:name, :area_id, :protection_type, :pitches, :picture)
    end
end
