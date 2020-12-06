import { connect } from 'react-redux';
import ChatRoom from './chattroom'
import { withRouter } from 'react-router-dom'

const mSTP = state => {
    return({
        user: state.session.currentUser
        // channelName: match.params.user
    })
}

const mDTP = dispatch => {
    return({

    })
}

export default withRouter(connect(mSTP,mDTP)(ChatRoom));