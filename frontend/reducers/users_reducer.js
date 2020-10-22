import {RECEIVE_USERS, CLEAR_USERS} from '../actions/users'

const usersReducer = (state={}, action) => {
    Object.freeze(state)

    switch(action.type){
        case RECEIVE_USERS:
            return action.users;
        case CLEAR_USERS:
            return {};
        default:
            return state;
    }
}

export default usersReducer;