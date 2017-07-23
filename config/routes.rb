Rails.application.routes.draw do
  root 'landing#index'
  devise_for :users
  root to: "pictures#index"
  resources :pictures
end
