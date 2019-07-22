require 'rubygems'
require 'sinatra/base'

configure {
  set :server, :puma
}
set :public_folder, 'public'

class Contact < Sinatra::Base
  get '/' do
    File.read(File.join('public', 'index.html'))
    # if Sinatra::Base.environment == :production
    #   File.read(File.join('public', 'index.html'))
    # else
    #   'This is not production'
    # end
  end

  run! if app_file == $0
end
