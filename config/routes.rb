Rails.application.routes.draw do
  resources :anchors
  resources :bolts
  resources :climbing_routes
  resources :areas
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
