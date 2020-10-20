import { connect } from 'react-redux';
import Carousel from './carousel'

const mSTP = state => {
    return({
        clips: state.entities.clips
    })
}

const mDTP = dispatch => {
    return({})
}

export default connect(mSTP, mDTP)(Carousel);