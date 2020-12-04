import {connect} from 'react-redux';
import InnerCategory from './inner_category';
import {categoriesList} from '../../../../actions/categories';
import { categoryClips } from '../../../../actions/clips'

const mSTP = state => {
    let urlArr = decodeURI(window.location.hash).split("/");
    let urlId = urlArr[urlArr.length-1];

    return({
        categories: state.entities.categories,
        url: urlId
    })
}

const mDTP = dispatch => ({
    categoriesList: () => dispatch(categoriesList()),
    categoryClips: category => dispatch(categoryClips(category))
})


export default connect(mSTP,mDTP)(InnerCategory);