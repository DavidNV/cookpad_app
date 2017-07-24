class ApplicationController < ActionController::Base
  include SessionHandler
  protect_from_forgery with: :exception
  layout "landing"

  def authenticate_user!
    unless current_user
      flash[:error] = "You need to be log in"
      redirect_to user_session_path
    end
  end
end
