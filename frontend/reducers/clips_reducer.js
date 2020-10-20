import { RECEIVE_CLIPS, CLEAR_CLIPS } from '../actions/clips'


const clipsReducer = (state={}, action) => {
    Object.freeze(state)

    switch(action.type){
        case RECEIVE_CLIPS:
            return action.clips;
        case CLEAR_CLIPS:
            return {};
        default:
            return state;
    }
}

export default clipsReducer;