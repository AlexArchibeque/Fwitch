export const getCategoryClips = (category) => {
    return $.ajax({
        url: `/api/categories/${category}/clips`,
        method: 'GET'
    })
}

export const getChannelClips = (channelName) => {
    return $.ajax({
        url: `/api/channels/${channelName}/clips`,
        method: "GET"
    })
}

export const getAllClips = () => {
    return $.ajax ({
        url: `/api/clips`,
        method: 'GET'
    })
}

export const getClip = (clipId) => {
    return $.ajax({
        url: `/api/clips/${clipId}`,
        method: 'GET'
    })
}