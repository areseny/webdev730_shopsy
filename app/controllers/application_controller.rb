class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  private

  def login(user)
    @current_user = user
    session[:session_token] = user.create_session
  end

  def current_user
    user_session = Session.find_by(session_token: session[:session_token])
    @current_user ||= User.find(user_session.user_id)
  end

  def logout
    if current_user == User.find_by(username: "Guest")
      CartItem.where(user_id: User.find_by(username: "Guest").id).destroy_all
    end
    user_session = Session.find_by(session_token: session[:session_token])
    user_session.destroy!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

end
