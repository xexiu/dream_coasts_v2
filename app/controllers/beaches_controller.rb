class BeachesController < ApplicationController
  layout 'layout_index_beaches'
  def index
    @beaches = Beach.all
  end

  def new
    @beach = Beach.new
  end

  def create
    @beach = Beach.new entry_params
    if @beach.save
      redirect_to action: :index, controller: :beaches
    else
      render 'new'
    end
  end

  private

  def entry_params
    params.require(:beach).permit(:name, :short_description, :long_description, :img)
  end
end
