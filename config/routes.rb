Rails.application.routes.draw do

  namespace :api do
    get 'categories/index'
  end

  namespace :api do
    get 'categories/show'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show] do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:show, :create, :update, :destroy]
    resources :categories, only: [:index, :show]
    resources :cart_items, only: [:create, :index, :show, :destroy]
  end
end
