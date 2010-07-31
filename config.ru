require 'sinatra'
Sinatra::Application.set(
  :run => false,
  :environment => ENV['RACK_ENV']
)

require 'fen'
run Sinatra::Application
