class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  private

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logout
    if current_user == User.find_by(username: "Guest")
      CartItem.where(user_id: User.find_by(username: "Guest").id).destroy_all
    end
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

end
