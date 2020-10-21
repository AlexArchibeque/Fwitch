import React from 'react';
import {Route, Switch} from 'react-router-dom';


import About from '../home/about';
import Home from '../home/home'
import DirectoryContainer from '../directory/directory_container'
import NoPageComponent from '../home/404Page'
import InnerCategoryContainer from '../directory/category/inner_category/inner_category_container'

import ClipsPageContainer from '../directory/clips_page_container' 

import ClipPage from '../directory/clips/clip_page'

import UserStreamPage from '../userpage/user_page_container'


class MainPageCenter extends React.Component {

    render(){
        return(
            <div className="inner-main-page-container">
                <Route exact path="/directory/clips" component={ClipsPageContainer}/>
                <Switch>
                    <Route path="/directory/:category" component={InnerCategoryContainer}/>
                    <Route path="/directory" component={ DirectoryContainer } />
                    <Route path="/videos/:id" component={ ClipPage } />
                    <Route path="/about" component={ About } />
                    <Route exact path="/:user" component={ UserStreamPage} />
                    <Route exact path="/" component={ Home } />
                    <Route component={NoPageComponent} />
                </Switch>
            </div>
        )
    }
}

export default MainPageCenter;


