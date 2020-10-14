import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Home from './home/home'
import NavBarContainer from './navbar/nav_bar_container'



const App = () => {

    return (
        <div>
            <Route path="/" component={NavBarContainer} />
            <Route exact path="/" component={ Home } />
        </div>
    )
}

export default App;