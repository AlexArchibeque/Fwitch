import { connect } from 'react-redux';
import DropDown from './dropdown'
import {logout} from '../../actions/session'

const mSTP = state => {

    return ({

    })
}

const mDTP = dispatch => {

    return({
        logout: () => dispatch(logout())
    })
}

export default connect(null, mDTP)(DropDown);