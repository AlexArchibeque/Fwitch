import {connect} from 'react-redux';
import Categories from './categories';

const mSTP = state => {
    return({
        categories: state.entities.categories
    })
}

const mDTP = dispatch => ({

})

export default connect(mSTP,mDTP)(Categories);