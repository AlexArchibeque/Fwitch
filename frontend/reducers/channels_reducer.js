import {GET_CHANNELS, REMOVE_CHANNELS} from '../actions/channels'

const channelsReducer = (state={}, action) => {
    Object.freeze(state)

    switch(action.type) {
        case GET_CHANNELS:
            return Object.assign({}, state,action.channels);
        case REMOVE_CHANNELS:
            return {};
        default:
            return state;
    }   
}

export default channelsReducer