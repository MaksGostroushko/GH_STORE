class AddActiveToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :active, :boolean, default: false
  end
end