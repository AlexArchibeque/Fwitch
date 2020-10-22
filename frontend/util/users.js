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