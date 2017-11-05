Rails.application.routes.draw do
  get '/' => 'articles#home'
  get '/home' => 'articles#home'
  get '/articles' => 'articles#index'
  get '/articles' => 'articles#new'
  post '/articles' => 'articles#create'
  get '/articles/:article_title' => 'articles#lookup'
  get '/articles/user_article/:id' => 'articles#show'
  delete '/articles/:id' => 'articles#destroy'
  get '/articles/chrome_extension/:article_title' => 'articles#lookup_create_chrome'


  get '/highlights' => 'highlights#index'
  post '/highlights' => 'highlights#create'
  delete '/highilghts' => 'highlights#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'


end
