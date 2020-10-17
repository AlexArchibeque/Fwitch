import { connect } from 'react-redux';
import DirectoryPage from './directory';
import {categoriesList}  from '../../actions/categories'

const mSTP = state => ({
    
});

const mDTP = dispatch => {
    return({
        categoriesList: () => dispatch(categoriesList())
    })
};

export default connect(mSTP,mDTP)(DirectoryPage);