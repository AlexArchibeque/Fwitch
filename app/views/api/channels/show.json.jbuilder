json.set! @channel.id do
    json.extract! @channel, :id, :name, :description, :followers
    json.username @channel.user.username
    json.ownerInfo @channel.user
    json.clips @channel.clips
    json.category @channel.category
    json.channelPhoto url_for(@channel.channel_pic)
end