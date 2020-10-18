class CreateClips < ActiveRecord::Migration[5.2]
  def change
    create_table :clips do |t|
      t.string :description, null: false
      t.integer :category_id, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end

    add_index :clips, :category_id
    add_index :clips, :channel_id
  end
end
