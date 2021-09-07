Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :companies, only: %i[index create show update]
      resources :users, only: %i[show update]
      resources :techstacks, only: %i[index create show]
      resources :incomes, only: %i[index create show]
      resources :welfares, only: %i[index create show]
      resources :selections, only: %i[index create show]

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end
    end
  end
end