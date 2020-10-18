import {connect} from 'react-redux';
import InnerCategory from './inner_category';
import {categoriesList} from '../../../../actions/categories';

const mSTP = state => {
    return({
        categories: state.entities.categories
    })
}

const mDTP = dispatch => ({
    categoriesList: () => dispatch(categoriesList())
})


export default connect(mSTP,mDTP)(InnerCategory);