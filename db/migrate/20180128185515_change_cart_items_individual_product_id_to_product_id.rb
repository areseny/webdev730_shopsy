class ChangeCartItemsIndividualProductIdToProductId < ActiveRecord::Migration[5.1]
  def change
    rename_column :cart_items, :individual_product_id, :product_id
  end
end
