# == Schema Information
#
# Table name: category_products
#
#  id          :integer          not null, primary key
#  product_id  :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class CategoryProduct < ApplicationRecord
  belongs_to :category
  belongs_to :product
end
