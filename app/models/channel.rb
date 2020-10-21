# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  description :text
#  name        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  owner_id    :integer          not null
#
# Indexes
#
#  index_channels_on_owner_id  (owner_id)
#
class Channel < ApplicationRecord
    validates :name, presence: true

    before_validation :ensure_default_description

    def ensure_default_description 
        self.description ||= self.name + "'s Channel!"
    end

    has_one_attached :channel_pic
    
    belongs_to :user,
        foreign_key: :owner_id

    has_many :clips,
        foreign_key: :channel_id
end
