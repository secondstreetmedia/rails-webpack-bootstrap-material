Rails.application.routes.draw do

  root 'landing_page#index'
  get '/landing_page', to: 'landing_page#index'

end
