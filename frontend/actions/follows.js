import {postFollow, deleteFollow, showFollows} from '../util/follows'

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW"
export const REMOVE_FOLLOW = "REMOVE_FOLLOW"

const receiveFollow = (follow) => {
    return({
        type: RECEIVE_FOLLOW,
        follow
    })
}

const removeFollow = (follow) => {
    return ({
        type: REMOVE_FOLLOW,
        follow
    })
}

export const followChannel = follow => dispatch => postFollow(follow)
    .then( followInfo => dispatch(receiveFollow(followInfo)))

export const removeFollowFromChannel = channelId => dispatch =>  deleteFollow(channelId)
    .then( channelInfo => dispatch(removeFollow(channelInfo)))

export const updateFollows = () => dispatch => showFollows("2")
    .then( userInfo => {
        dispatch(receiveFollow(userInfo))
        
    })