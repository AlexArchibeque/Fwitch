class AddCategoryToChannel < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :category_id, :integer

    add_index :channels, :category_id
  end
end
