import { connect } from 'react-redux';
import SideBar from './sidebar'

import {allChannels} from '../../actions/channels'

const mSTP = state => {
    return({
        channels: state.entities.channels
    })
}

const mDTP = dispatch => {
    return({
        allChannels: () => dispatch(allChannels())
    })
}

export default connect(mSTP,mDTP)(SideBar);