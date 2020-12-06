class ChatRoomChannel < ApplicationCable::Channel
  def subscribed
    stream_for "chat_room_channel_#{params[:id]}"
  end

  def sendMessage(data)
    # Saves to backend for future lookup/data selling
    message = Message.create({user_id:data['user_id'], body:data['message']})
    # makes a message to be broadcasted/sent to the frontend
    broadcastMessage = {message: message.body, username: message.user.username}
    # send message to everyone
    ChatRoomChannel.broadcast_to("chat_room_channel_#{data['channelName']}", broadcastMessage)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
