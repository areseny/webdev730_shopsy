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
#  featured    :boolean          default(FALSE), not null
#  public_id   :string
#

require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
