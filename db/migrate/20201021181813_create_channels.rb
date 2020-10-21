class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null:false
      t.text :description
      t.integer :owner_id, null: false
      t.timestamps
    end

    remove_column :users, :channel_id
    add_index :channels, :owner_id
  end
end
