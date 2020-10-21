export const getAllChannels = () => {
    return $.ajax({
        url: `/api/channels`,
        method: 'GET'
    })
}

export const getOneChannel = (channelName) => {
    return $.ajax({
        url: `/api/channels/${channelName}`,
        method: 'GET'
    })
}