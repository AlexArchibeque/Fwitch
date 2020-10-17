import React from 'react';
import {Route, Switch} from 'react-router-dom';


import About from '../home/about';
import Home from '../home/home'
import DirectoryContainer from '../directory/directory_container'
import NoPageComponent from '../home/404Page'
import CategoryContainer from '../directory/category/category_container'

import ClipsPageContainer from '../directory/clips_page_container' 


class MainPageCenter extends React.Component {

    render(){
        return(
            <Switch>
                <Route path="/directory/clips" component={ClipsPageContainer}/>
                <Route path="/directory/:category" component={CategoryContainer}/>
                <Route path="/directory" component={ DirectoryContainer } />
                <Route path="/about" component={ About } />
                <Route exact path="/" component={ Home } />
                <Route component={NoPageComponent} />
            </Switch>
        )
    }
}

export default MainPageCenter;


