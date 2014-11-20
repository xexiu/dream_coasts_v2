class BeachesController < ApplicationController
  layout 'layout_index_beaches'
  def index
    @beaches = Beach.all
  end

  def show
    @beach = Beach.find_by(name: params[:name])
  end

  def new
    @beach = Beach.new
  end

  def create
    @beach = Beach.new entry_params
    if @beach.save
      flash[:notice] = 'Beach created successfully'
      redirect_to action: :index, controller: :beaches
    else
      flash[:alert] = 'Could not save the Beach'
      redirect_to action: :new, controller: :beaches
    end
  end

private

  def entry_params
    params.require(:beach).permit(:name, :short_description, :long_description, :img)
  end
end
