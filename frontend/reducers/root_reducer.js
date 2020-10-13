import { combineReducers } from 'redux';
import entitiesReducer  from './entities_reducer';
import sessionReducer from './sessions_reducer'


const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer
})

export default RootReducer;