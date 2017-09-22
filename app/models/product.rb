# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  price       :float            not null
#  description :string           not null
#  seller_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string           not null
#

class Product < ApplicationRecord
  validates :title, :image_url, :price, :description, presence: true

  belongs_to :seller,
    primary_key: :id,
    foreign_key: :seller_id,
    class_name: :User

  has_many :comments
end
