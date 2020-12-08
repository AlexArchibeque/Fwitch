import {connect} from 'react-redux';
import Settings from './settings';
import { patchUserImage } from '../../actions/users'

const mSTP = state => {
    return({
        currentUser: state.session.currentUser
    })
}

const mDTP = dispatch => {
    return({
        patchUserImage: (userId, image) => dispatch(patchUserImage(userId,image))
    })
}

export default connect(mSTP,mDTP)(Settings);