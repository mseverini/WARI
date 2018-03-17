Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"
  get "/s3/sign", to: "sign#sign"
  resources :anchors
  resources :bolts
  resources :climbing_routes do
    collection do
      post 'create_bolts'
    end
  end
  resources :areas

  root 'areas#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
