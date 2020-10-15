import {connect} from 'react-redux';
import { login } from '../../actions/session';
import Demo from './demo'


const mDTP = dispatch => {

    return({
        login: user => dispatch(login(user))
    })
}


export default connect(null, mDTP)(Demo);