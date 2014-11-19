class UsersController < ApplicationController
  # Allow ONLY admins to view the profiles:
  # before_filter :authenticate_admin!, :except => [:show]
  def index
  end

  def show
    @user = User.find(params[:id])
  end
end
