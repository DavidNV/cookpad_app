class ProfilesController < ApplicationController
  before_action :authenticate_user!

  def show
    @pictures = Picture.where(user_id: current_user.id)
  end

end
