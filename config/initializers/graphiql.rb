GraphiQL::Rails.config.headers['Authorization'] = -> (context) {
  "Token #{context.request.env[:clearance].current_user.try(:api_token)}"
}