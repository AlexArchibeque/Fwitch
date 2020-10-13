import { combineReducers } from 'redux';
import entitiesReducer  from './entities_reducer';
// import sessionsReducer from './sessions_reducer'


const RootReducer = combineReducers({
    entities: entitiesReducer,
    // session: sessionsReducer
})

export default RootReducer;