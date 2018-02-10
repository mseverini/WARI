class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  include ActionController::HttpAuthentication::Token::ControllerMethods

  # Rescue from any error with internal server code
  rescue_from StandardError do |e|
    logger.ap 'rescue_from api_controller'
    logger.ap e.message, :error
    logger.ap e.backtrace, :error
    render json: { error: e.message }, status: :internal_server_error
  end

  # include AuthHelper
  # Add a before_action to authenticate all requests.
  # Move this to subclassed controllers if you only
  # want to authenticate certain methods.
  before_action :authenticate

  protected

  # Authenticate the user with token based authentication
  def authenticate
    authenticate_token || render_unauthorized
  end

  def authenticate_token
    authenticate_with_http_token do |token, _options|
      @current_user = User.find_by(token: token)
    end
  end

  def render_unauthorized(realm = 'Application')
    # self.headers["WWW-Authenticate"] = %(Token realm="#{realm.gsub(/"/, "")}")
    # render json: { error: 'Bad credentials' }, status: :unauthorized
  end
end
