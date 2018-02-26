class BoltsController < ApplicationController
  before_action :set_bolt, only: [:show, :edit, :update, :destroy]

  # GET /bolts
  # GET /bolts.json
  def index
    @bolts = Bolt.all
  end

  # GET /bolts/1
  # GET /bolts/1.json
  def show
  end

  # GET /bolts/new
  def new
    @bolt = Bolt.new
  end

  # GET /bolts/1/edit
  def edit
  end

  # POST /bolts
  # POST /bolts.json
  def create
    if bolt_params.number_of_bolts
      #not what we want
    else
    @bolt = Bolt.new(bolt_params)
    end
    respond_to do |format|
      if @bolt.save
        format.html { redirect_to @bolt, notice: 'Bolt was successfully created.' }
        format.json { render :show, status: :created, location: @bolt }
      else
        format.html { render :new }
        format.json { render json: @bolt.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /bolts/1
  # PATCH/PUT /bolts/1.json
  def update
    respond_to do |format|
      if @bolt.update(bolt_params)
        format.html { redirect_to @bolt, notice: 'Bolt was successfully updated.' }
        format.json { render :show, status: :ok, location: @bolt }
      else
        format.html { render :edit }
        format.json { render json: @bolt.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bolts/1
  # DELETE /bolts/1.json
  def destroy
    @bolt.destroy
    respond_to do |format|
      format.html { redirect_to bolts_url, notice: 'Bolt was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bolt
      @bolt = Bolt.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def bolt_params
      params.require(:bolt).permit(:number, :bolt_type, :year_placed, :climbing_route_id, :pitch)
    end
end
