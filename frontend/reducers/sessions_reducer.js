import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session';
import {RECEIVE_FOLLOW, REMOVE_FOLLOW} from '../actions/follows'
import { RECEIVE_USER_INFO } from '../actions/users'

const _nullSession = {
    currentUser: null,
}

const sessionReducer = (state=_nullSession, action) => {
    Object.freeze(state)

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign( {}, { currentUser: action.user })
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case RECEIVE_FOLLOW:
            return Object.assign( {}, { currentUser: action.follow})
        case REMOVE_FOLLOW:
            return Object.assign( {}, { currentUser: action.follow})
        case RECEIVE_USER_INFO:
            return Object.assign( {}, { currentUser: action.userInfo})
        default:
            return state;
    }
}

export default sessionReducer;