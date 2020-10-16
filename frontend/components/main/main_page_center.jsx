import React from 'react';
import {Route, Switch} from 'react-router-dom';


import About from '../home/about';
import Home from '../home/home'
import DirectoryContainer from '../directory/directory_container'
import NoPageComponent from '../home/404Page'


class MainPageCenter extends React.Component {

    render(){
        return(
            <Switch>
                <Route path="/directory" component={ DirectoryContainer } />
                <Route path="/about" component={ About } />
                <Route exact path="/" component={ Home } />
                <Route component={NoPageComponent} />
            </Switch>
        )
    }
}

export default MainPageCenter;


