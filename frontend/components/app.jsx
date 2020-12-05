import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {connect} from 'react-redux';
import { updateFollows } from '../actions/follows'

//routes
import AuthRoute from '../util/route_utils'
import ProtectedRoute from '../util/route_utils'

// Components
import NavBarContainer from './navbar/nav_bar_container'
import MainPageContainer from './main/main_container'




class App extends React.Component {
    constructor(props){
        super(props)
        if(props.user){
            props.updateFollows()
        }
    }

    render(){

        return (
            <div className="component-main-container">
                <Route path="/" component={ NavBarContainer } />
                <Route path="/" component={ MainPageContainer } />
            </div>
        )
    }
}

const mSTP = state => {

    return ({
        user: state.session.currentUser
    })
}

const mDTP = dispatch => {
    return({
        updateFollows: () => dispatch(updateFollows())
    })
}

export default connect(mSTP,mDTP)(App);