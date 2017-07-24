class Comment < ApplicationRecord
  ALLOWED_ATTRIBUTES = [
    :picture_id, :user_id, :description
  ]
  belongs_to :user
  belongs_to :picture

end
