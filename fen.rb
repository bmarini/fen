get '/*' do
  @fen = params[:splat]
  erb :index
end
