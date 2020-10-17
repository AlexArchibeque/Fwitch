import {combineReducers} from 'redux'
import sessionErrorsReducer from './session_errors_reducer';
import categoriesErrorsReducer from './categories_errors_reducer';


const errorsReducer = combineReducers({
    session:sessionErrorsReducer,
    categories: categoriesErrorsReducer
})


export default errorsReducer