import React from 'react';
import { Route, Switch } from 'react-router-dom';

//routes
import AuthRoute from '../util/route_utils'
import ProtectedRoute from '../util/route_utils'

// Components
import Home from './home/home'
import NavBarContainer from './navbar/nav_bar_container'
import NoPageComponent from './home/404Page'



const App = () => {

    return (
        <div>
            <Route path="/" component={ NavBarContainer } />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route component={NoPageComponent} />
            </Switch>
        </div>
    )
}

export default App;