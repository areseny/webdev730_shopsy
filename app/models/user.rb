# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :comments, dependent: :destroy
  has_many :sessions

  has_many :products,
    primary_key: :id,
    foreign_key: :seller_id,
    class_name: :Product,
    dependent: :destroy

  has_many :cart_items, dependent: :destroy
  has_many :cart_products, through: :cart_items, source: :product

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def create_session   
    session_token = SecureRandom.urlsafe_base64
    session = Session.new(session_token: session_token, user_id: self.id)
    session.save
    session_token
  end 

end
