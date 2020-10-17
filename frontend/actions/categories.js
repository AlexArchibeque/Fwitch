import { getCategories } from '../util/categories'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const CATEGORY_ERRORS = 'CATEGORY_ERRORS';

const receiveCategories = (categories) => {
    return({
        type: RECEIVE_CATEGORIES,
        categories
    })
}

const receiveErrors = errors => {
    return({
        type: CATEGORY_ERRORS,
        errors
    })
}


export const categoriesList = () => dispatch => getCategories()
    .then(categories => dispatch(receiveCategories(categories)),
    err => ( dispatch(receiveErrors(err))));