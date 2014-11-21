class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @title = @user.name
  end

  def new
    @user = User.new
    @title = "Sign up"
  end

  def create
    @user = User.new(user_params) # Is the same as:
    # @user = User.new(:name => "Foo Bar", :email => "foo@invalid",:password => "dude", :password_confirmation => "dude")
    if @user.save
    # Handle a successful save.
      flash[:success] = "Welcome to Dream Coasts!"
      redirect_to @user
    else
      @title = "Sign up"
      render 'new'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :salt, :encrypted_password)
  end

end
