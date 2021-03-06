# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :posts, dependent: :destroy 
  has_many :comments, through: :posts
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :friends, Array


  def self.add_friend(ids)
    ids = ids.empty? ? [0] : ids
    User.where('id IN (?)', ids)
  end

end
