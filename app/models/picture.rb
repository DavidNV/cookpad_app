require './app/uploaders/image_uploader.rb'
class Picture < ApplicationRecord
  ALLOWED_ATTRIBUTES = [
    :title, :description, :image, :user_id
  ]

  belongs_to :user
  has_many :comments, inverse_of: :picture

  mount_uploader :image, ::ImageUploader

  def as_json_with_comments
    hash = as_json(include: {
      comments: {include: [
          user: {only: [:id, :email] }
        ]
      },
      user: { only: [:id, :email] }
    },
    only: [:id, :title, :description, :user_id, :created_at], 
    methods: :image_url
    )
  end

  private
   def owner
     user.serializable_hash
   end

   def picture_comments
     comments.map { |comment| comment.serializable_hash }
   end
end
