# == Schema Information
#
# Table name: clips
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :integer          not null
#  channel_id  :integer          not null
#
# Indexes
#
#  index_clips_on_category_id  (category_id)
#  index_clips_on_channel_id   (channel_id)
#
class Clip < ApplicationRecord
    validates :description, :category_id, :channel_id, presence: true

    has_one_attached :video

    belongs_to :category,
        foreign_key: :category_id

    belongs_to :channel,
        foreign_key: :channel_id
end
