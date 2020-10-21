json.set! @channel.id do
    json.extract! @channel, :id, :name, :description
    json.channelPhoto url_for(@channel.channel_pic)
end