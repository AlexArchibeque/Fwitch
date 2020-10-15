import { connect } from 'react-redux';
import DropDown from './dropdown'
import {logout} from '../../actions/session'

const mSTP = state => {

    return ({
        currentUser: state.session.currentUser
    })
}

const mDTP = dispatch => {

    return({
        logout: () => dispatch(logout())
    })
}

export default connect(mSTP, mDTP)(DropDown);