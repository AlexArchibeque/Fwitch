import {connect} from 'react-redux';
import InnerCategory from './inner_category';

const mSTP = state => {
    return({
        // categories: state.entities.categories
    })
}

const mDTP = dispatch => ({

})

export default connect(mSTP,mDTP)(InnerCategory);