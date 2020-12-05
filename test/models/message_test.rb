# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  channel_id :integer
#  user_id    :integer          not null
#
# Indexes
#
#  index_messages_on_channel_id  (channel_id)
#  index_messages_on_user_id     (user_id)
#
require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
