class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end
  helper_method :current_user

  def authenticate_user!
    redirect_to '/api/v1/login' unless current_user
  end
end
