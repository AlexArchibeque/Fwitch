import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { searchBarSearch } from '../../util/session'


const mSTP = state => {

    return ({

    })
}

const mDTP = dispatch => {
    return({
        updateSearch: (searchPojo) => searchBarSearch(searchPojo)
    })
}

export default connect(mSTP, mDTP)(SearchBar);