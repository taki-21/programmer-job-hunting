# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/recommended-companies', to: 'companies#pickup'
      get '/skill-search', to: 'companies#skill_search'
      resources :companies do
        collection do
          get :search
        end
        resources :likes, only: %i[index create]
        delete '/likes', to: 'likes#destroy'
      end
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end
    end
  end
end
