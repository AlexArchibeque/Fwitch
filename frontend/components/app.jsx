import React from 'react';
import { Route, Switch } from 'react-router-dom';

//routes
import AuthRoute from '../util/route_utils'
import ProtectedRoute from '../util/route_utils'

// Components
import NavBarContainer from './navbar/nav_bar_container'
import MainPageContainer from './main/main_container'




const App = () => {

    return (
        <div className="component-main-container">
            <Route path="/" component={ NavBarContainer } />
            <Route path="/" component={ MainPageContainer } />
        </div>
    )
}

export default App;