class AddCatIdToProducts < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :category_id, :integer, null: false
  end
end
