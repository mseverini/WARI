class AnchorsController < ApplicationController
  before_action :set_anchor, only: [:show, :edit, :update, :destroy]

  # GET /anchors
  # GET /anchors.json
  def index
    @anchors = Anchor.all
  end

  # GET /anchors/1
  # GET /anchors/1.json
  def show
  end

  # GET /anchors/new
  def new
    @anchor = Anchor.new
  end

  # GET /anchors/1/edit
  def edit
  end

  # POST /anchors
  # POST /anchors.json
  def create
    @anchor = Anchor.new(anchor_params)

    respond_to do |format|
      if @anchor.save
        format.html { redirect_to @anchor, notice: 'Anchor was successfully created.' }
        format.json { render :show, status: :created, location: @anchor }
      else
        format.html { render :new }
        format.json { render json: @anchor.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /anchors/1
  # PATCH/PUT /anchors/1.json
  def update
    respond_to do |format|
      if @anchor.update(anchor_params)
        format.html { redirect_to @anchor, notice: 'Anchor was successfully updated.' }
        format.json { render :show, status: :ok, location: @anchor }
      else
        format.html { render :edit }
        format.json { render json: @anchor.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /anchors/1
  # DELETE /anchors/1.json
  def destroy
    @anchor.destroy
    respond_to do |format|
      format.html { redirect_to anchors_url, notice: 'Anchor was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_anchor
      @anchor = Anchor.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def anchor_params
      params.require(:anchor).permit(:number_of_bolts, :chain_type, :bolt_type, :year_placed, :climbing_route_id, :pitch)
    end
end
