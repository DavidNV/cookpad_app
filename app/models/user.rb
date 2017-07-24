class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :pictures, inverse_of: :user
  has_many :comments, inverse_of: :user
end
