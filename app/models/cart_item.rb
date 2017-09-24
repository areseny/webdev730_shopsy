# == Schema Information
#
# Table name: cart_items
#
#  id         :integer          not null, primary key
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class CartItem < ApplicationRecord
  validates :product_id,
            uniqueness: { scope: :user_id, message: "Already in cart" }

  belongs_to :user
  belongs_to :product

end
