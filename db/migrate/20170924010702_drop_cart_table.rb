class DropCartTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :carts
    remove_column :cart_items, :cart_id
    add_column :cart_items, :user_id, :integer, null: false
  end
end
