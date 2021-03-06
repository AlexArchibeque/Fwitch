Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :channels, only: [:show, :index] do
        resources :clips, only: [ :index ]
    end
    resources :users, only: [:create, :destroy, :show, :index, :update]
    resources :categories, only: [:index, :show] do
      resources :clips, only: [ :index ]
    end
    resources :follows, only: [:create,:destroy,:show]
    resources :clips, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
  end

  mount ActionCable.server, at: '/cable'
end
