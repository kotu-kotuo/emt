
require 'sidekiq/web'

Rails.application.routes.draw do
mount Sidekiq::Web => '/sidekiq' if Rails.env.development?

  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "articles#index"

  resources :articles do
    resource :like, only: [:show, :create, :destroy]
    resources :comments, only: [:index, :show, :create]
  end

  resources :accounts, only: [:show] do
    resources :follows, only: [:index, :create]
    resources :unfollows, only: [:create]
    resources :followings, only: [:index]
    resources :followers, only: [:index]

    member do
      get'list'
    end

  end

  resource "profile", only: [:show, :edit, :update]

  # #api用
  # namespace :api, {format: 'json'} do
  #   namespace :v1 do
  #     resources :articles, only: [:index]
  #   end
  # end



end
