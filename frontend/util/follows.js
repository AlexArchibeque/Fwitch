export const postFollow = (follow) => {

    return $.ajax({
        method: "POST",
        url: "/api/follows",
        data: {follow}
    })

}

export const deleteFollow = (channelId) =>{
    return $.ajax({
        method: 'DELETE',
        url: `/api/follows/${channelId}` 
    })
}

export const showFollows = (num) => {
    return $.ajax({
        method: "GET",
        url: `api/follows/${num}`
    })
}