Rails.application.routes.draw do
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
