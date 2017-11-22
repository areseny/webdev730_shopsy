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

require 'test_helper'

class CategoryProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
