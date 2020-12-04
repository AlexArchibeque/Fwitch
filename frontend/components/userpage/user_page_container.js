import {connect} from 'react-redux';
import UserPage from './user_page';
import { getUser, clearUsers} from '../../actions/users'

const mSTP = state => {
    return({
        channel: Object.values(state.entities.users)[0]
    })
}

const mDTP = dispatch => {
    return({
        getUser: username => dispatch(getUser(username)),
        clearUsers: () => dispatch(clearUsers())
    })
}

export default connect(mSTP,mDTP)(UserPage);