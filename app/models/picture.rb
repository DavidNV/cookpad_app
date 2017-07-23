require './app/uploaders/image_uploader.rb'
class Picture < ApplicationRecord
  ALLOWED_ATTRIBUTES = [
    :title, :description, :image, :user_id
  ]

  belongs_to :user
  has_many :pictures, inverse_of: :user

  mount_uploader :image, ::ImageUploader

  private
   def validate_size
     errors[:image] << "it should be less than 3500KB" if image.size > 3.5.megabytes
   end
end
