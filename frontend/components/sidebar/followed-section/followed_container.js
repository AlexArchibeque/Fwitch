import { connect } from 'react-redux';
import Followed from './followed'

const mSTP = state => {
    let followedChannels;
    if(state.session.currentUser.followed_channels){
        followedChannels = state.session.currentUser.followed_channels.slice(0,6)
    }
    return({
        currentUser: state.session.currentUser,
        followedChannels: followedChannels
    })
}

const mDTP = dispatch => {
    return({

    })
}

export default connect(mSTP,mDTP)(Followed);