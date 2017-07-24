class PicturesController < ApplicationController
  layout "landing"
  before_action :authenticate_user!, except: [:index]

  def index
    @pictures = Picture.all
  end

  def show
    Rails.logger.info(params.inspect)
    picture = Picture.find(params[:id])
    return redirect_to pictures_path unless picture.present?
    @parsed_picture = picture.as_json_with_comments
    flash[:success] = "You can add comments about this picture :)"
  end

  def new
    @picture = Picture.new
  end

  def create
    picture = Picture.new(picture_params)
    picture.save
    flash[:success] = "Yeah"
    redirect_to root_path
  end

  def destroy
    picture = Picture.find(params[:id])
    picture.destroy
    flash[:success] = "Yeah! Picture deleted!"
    redirect_to root_path
  end

  private

   def picture_params
     params.require(:picture).permit(*Picture::ALLOWED_ATTRIBUTES)
   end
end
