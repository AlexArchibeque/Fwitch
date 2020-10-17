export const getCategories = () => {
    return $.ajax({
        url: '/api/categories',
        method: 'GET'
    })
}
