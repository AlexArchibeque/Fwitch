# == Schema Information
#
# Table name: follows
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  channel_id :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_follows_on_channel_id  (channel_id)
#  index_follows_on_user_id     (user_id)
#
class Follow < ApplicationRecord
    validates :channel_id, :user_id, presence: true

    belongs_to :user

    belongs_to :channel
end
