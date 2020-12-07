json.extract! @user, :username, :id, :email, :followed_channels, :channel
json.channelPhotoUrl url_for(@user.channel.channel_pic)
@user.followed_channels.each do |channel|
    json.set! channel.id do
        json.photoUrl url_for(channel.channel_pic)
        json.ownerName channel.user.username
    end
end