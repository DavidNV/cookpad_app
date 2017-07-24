Rails.application.routes.draw do
  root 'landing#index'
  devise_for :users
  resources :pictures
  resources :comments, only: [:create]
  resource :profile, only: [:show]
end
