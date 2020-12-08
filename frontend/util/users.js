export const retrieveUser = (username) => {
    return $.ajax({
        url: `/api/users/${username}`,
        method: 'GET',
    })
}

export const retrieveUsers = () => {
    return $.ajax({
        url: `api/users`,
        method: 'GET'
    })
}

export const updateUserImage = (userId,image) => {
    return $.ajax({
        url:`/api/users/${userId}`,
        method: 'PATCH',
        data: image,
        contentType: false,
        processData: false
    })
}

