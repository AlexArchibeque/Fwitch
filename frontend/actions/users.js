import {retrieveUser, retrieveUsers, updateUserImage} from '../util/users'

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO'
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

export const receiveUser = (userInfo) => {
    return({
        type: RECEIVE_USER_INFO,
        userInfo
    })
}

export const patchUserImage = (userId, image) => dispatch => updateUserImage(userId,image)
    .then(userInfo => dispatch(receiveUser(userInfo)))

export const getAllUsers = () => dispatch => retrieveUsers()
    .then(users => dispatch(receiveUsers(users)))

export const getUser = (username) => dispatch => retrieveUser(username)
    .then(user => dispatch(receiveUsers(user)))

