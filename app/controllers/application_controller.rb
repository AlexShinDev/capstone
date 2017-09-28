class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  def currrent_user
    @currrent_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end
  helper_method :currrent_user

  def authenticate_user!
    redirect_to '/login' unless currrent_user
  end
end
