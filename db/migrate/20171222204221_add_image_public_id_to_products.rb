class AddImagePublicIdToProducts < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :public_id, :string
  end
end
