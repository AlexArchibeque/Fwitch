Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :channels, only: [:show, :index]
    resources :users, only: [:create, :destroy, :show, :index]
    resources :categories, only: [:index, :show] do
      resources :clips, only: [ :index ]
    end
    resources :clips, only: [:index, :show]
    resource :session, only: [:create, :destroy]
  end
  
end
