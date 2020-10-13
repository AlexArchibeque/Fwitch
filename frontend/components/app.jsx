import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Home from './home/home'
import SignUpContainer from './session/signup_container';
import NavBarContainer from './navbar/nav_bar_container'



const App = () => {

    return (
        <div>
            <Route path="/" component={NavBarContainer} />
            <Route path="/" component={ Home } />
            <Route path="/signup" component= { SignUpContainer} />
        </div>
    )
}

export default App;