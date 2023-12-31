class UsersController < ApplicationController
  def register
    @user = User.new 
  end
  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to root_path
    else
      render :register, status: :unprocessable_entity
    end
  end
  private
  def user_params
    params.require(:user).permit(:name, :phone, :email, :password)
  end
end
