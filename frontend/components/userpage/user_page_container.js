import {connect} from 'react-redux';
import UserPage from './user_page';
import { getUser, clearUsers } from '../../actions/users'
import { removeFollowFromChannel, followChannel } from '../../actions/follows'
import {userClips} from '../../actions/clips'

const mSTP = state => {
    return({
        channel: Object.values(state.entities.users)[0],
        currentUser: state.session.currentUser,
        clips: Object.values(state.entities.clips)
    })
}

const mDTP = dispatch => {
    return({
        getUser: username => dispatch(getUser(username)),
        clearUsers: () => dispatch(clearUsers()),
        followChannel: (params) => dispatch(followChannel(params)),
        unfollowChannel: (channelId) => dispatch(removeFollowFromChannel(channelId)),
        userClips: (channelName) => dispatch(userClips(channelName))
    })
}

export default connect(mSTP,mDTP)(UserPage);