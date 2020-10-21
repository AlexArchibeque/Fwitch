import {getAllChannels, getOneChannel} from '../util/channels'

export const GET_CHANNELS = 'GET_CHANNELS';
export const REMOVE_CHANNELS = 'REMOVE_CHANNELS';

const receiveChannels = (channels) => {
    return({
        type: GET_CHANNELS,
        channels
    })
}

const removeChannels = () => {
    return({
        type: REMOVE_CHANNELS
    })
}

export const allChannels = () => dispatch => getAllChannels()
    .then(channels => dispatch(receiveChannels(channels)))

export const getChannel = (channelName) => dispatch => getOneChannel(channelName)
    .then(channel => dispatch(receiveChannels(channel)))
