
require 'sidekiq/web'

Rails.application.routes.draw do
mount Sidekiq::Web => '/sidekiq' if Rails.env.development?

  devise_for :users
  
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

  end
