class BeachesController < ApplicationController
  layout 'layout_index_beaches'
  def index
    @beaches = Beach.all
  end
end
