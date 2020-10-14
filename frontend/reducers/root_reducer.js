import { combineReducers } from 'redux';
import entitiesReducer  from './entities_reducer';
import sessionReducer from './sessions_reducer'
import errorsReducer from './errors_reducer'


const RootReducer = combineReducers({
    entities: entitiesReducer, //set you up
    errors: errorsReducer,
    session: sessionReducer //auth
})

export default RootReducer;