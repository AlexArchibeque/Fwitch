@channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :id, :name, :description
        if channel.channel_pic.attached?
            json.channelPhoto url_for(channel.channel_pic)
        else
            json.channelPhoto "default"
        end
        json.ownerName channel.user.username
        json.categoryTitle channel.category.title
    end
end