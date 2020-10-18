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
require 'test_helper'

class ClipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
