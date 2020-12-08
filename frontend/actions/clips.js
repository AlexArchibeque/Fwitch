import {getCategoryClips, getAllClips,
     getClip, getChannelClips, postUserClip} from '../util/clips'

export const RECEIVE_CLIPS = 'RECEIVE_CLIPS';
export const CLEAR_CLIPS = 'CLEAR_CLIPS';

const receiveClips = (clips) => {
    return({
        type: RECEIVE_CLIPS,
        clips
    })
}

export const clearClips = () => {
    return({
        type: CLEAR_CLIPS
    })
}

export const uploadedClip = (userInfo) => {
    return({
        type: 'RECEIVE_USER_INFO',
        userInfo
    })
}

export const createClip = videoInfo => dispatch => postUserClip(videoInfo)
    .then(userInfo => dispatch(uploadedClip(userInfo)))

export const userClips = channelName => dispatch => getChannelClips(channelName)
    .then(clips => dispatch(receiveClips(clips)))

export const categoryClips = category => dispatch => getCategoryClips(category)
    .then(clips =>  dispatch(receiveClips(clips)))

export const allClips = () => dispatch => getAllClips()
    .then(clips => dispatch(receiveClips(clips)))

export const getaClip = (clipId) => dispatch => getClip(clipId)
    .then(clip => dispatch(receiveClips(clip)))
