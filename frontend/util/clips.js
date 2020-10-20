export const getCategoryClips = (category) => {
    return $.ajax({
        url: `/api/categories/${category}/clips`,
        method: 'GET'
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