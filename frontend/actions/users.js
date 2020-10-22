import {retrieveUser, retrieveUsers} from '../util/users'

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const CLEAR_USERS = '';

const receiveUsers = (users) => {
    return({
        type: RECEIVE_USERS,
        users
    })
}

export const clearUsers = () => {
    return({
        type: CLEAR_USERS
    })
}

export const getAllUsers = () => dispatch => retrieveUsers()
    .then(users => dispatch(receiveUsers(users)))

export const getUser = (username) => dispatch => retrieveUser(username)
    .then(user => dispatch(receiveUsers(user)))