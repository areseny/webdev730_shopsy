class AddNotNullToCategoryProducts < ActiveRecord::Migration[5.1]
  def change
    change_column :category_products, :product_id, :integer, null: false
    change_column :category_products, :category_id, :integer, null: false
  end
end
