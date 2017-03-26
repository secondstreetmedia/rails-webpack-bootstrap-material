ruby '2.4.1'
source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.0.rc1'

# Use postgresql as the database for Active Record
gem 'pg', '~> 0.20'

gem 'coffee-rails', '~> 4.2', '>= 4.2.1'

# Use Puma as the app server
gem 'puma', '~> 3.7'

gem 'sass-rails', github: 'rails/sass-rails'

gem 'uglifier', '~> 3.1', '>= 3.1.1'

# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', github: 'rails/webpacker'

gem 'turbolinks', '~> 5.0', '>= 5.0.1'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder

gem 'jbuilder', '~> 2.6', '>= 2.6.3'

# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

gem 'haml', '= 4.1.0.beta.1'
gem 'haml-rails', '~> 0.9'

gem 'redcarpet', '~> 3.4'
gem 'rouge', '~> 2.0', '>= 2.0.7'
gem 'rouge-rails', '~> 0.2', '>= 0.2.1'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development


group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]

  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.12', '>= 2.12.1'

  gem 'selenium-webdriver'
end


group :production do
  gem 'redis', '= 4.0.0.rc1'

  gem 'heroku-deflater', github: 'romanbsd/heroku-deflater'

  gem 'rack-cors'
end


group :development do
  gem 'foreman', '~> 0.83'

  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', github: 'rails/web-console'

  gem 'listen', '~> 3.1', '>= 3.1.5'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  gem 'spring-watcher-listen', '~> 2.0', '>= 2.0.1'
end


# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

