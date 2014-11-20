class SiteController < ApplicationController
  def index
    @title = 'Dream Coasts'
    @Main_Title = 'Beaches Costa Brava'
    @Sub_Title = 'Live the best experiences in Costa Brava..'
    render :layout => 'layout_landing'
  end
end
