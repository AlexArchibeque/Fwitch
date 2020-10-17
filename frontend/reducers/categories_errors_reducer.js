import { CATEGORY_ERRORS, RECEIVE_CATEGORIES } from '../actions/categories';


const categoriesErrorsReducer = (state = [], action) => {
    Object.freeze(state)

    switch(action.type){
        case CATEGORY_ERRORS:
            return action.errors;
        case RECEIVE_CATEGORIES:
            return [];
        default:
            return state;
    }
}

export default categoriesErrorsReducer;