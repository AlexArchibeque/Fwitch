# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  description :text
#  name        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :integer
#  owner_id    :integer          not null
#
# Indexes
#
#  index_channels_on_category_id  (category_id)
#  index_channels_on_owner_id     (owner_id)
#
require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
