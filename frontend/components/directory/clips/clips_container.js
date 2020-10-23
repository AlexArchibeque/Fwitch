import { connect } from 'react-redux';
import Clips from './clips';

import {allClips, categoryClips, clearClips} from '../../../actions/clips'
import {getChannel} from '../../../actions/channels'

const mSTP = state => {
    let urlArr = decodeURI(window.location.hash).split("/");
    let urlId = urlArr[urlArr.length-1];

    return({
        url: urlId,
        clips: state.entities.clips,
        channels: state.entities.channels
    })
};

const mDTP = dispatch => {
    return({
        allClips: () => dispatch(allClips()),
        categoryClips: category => dispatch(categoryClips(category)),
        clearClips: () => dispatch(clearClips()),
        getChannel: (username) => dispatch(getChannel(username))
    })
};

export default connect(mSTP,mDTP)(Clips);