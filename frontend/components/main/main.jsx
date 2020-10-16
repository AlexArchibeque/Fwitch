import React from 'react';

import SideBarContainer from '../sidebar/sidebar_container'
import MainPageCenter from './main_page_center'

// import About from './home/about';
// import Home from './home/home'
// import DirectoryContainer from './directory/directory_container'

class Main extends React.Component{

    render(){
        return(
            <div className="main-page-container">
                < SideBarContainer />
                < MainPageCenter />
            </div>
        )
    }
}

export default Main;