import React from 'react';
import {Route} from 'react-router-dom';

import TabsContainer from './inner/tabs_container.jsx'
import CategoryContainer from './category/category_container'


class DirectoryPage extends React.Component {
    render() {
        return(
            <div className="directory-container">
                <h1>Browse</h1>
                < TabsContainer />
                < CategoryContainer />
            </div>
        )
    }
}


export default DirectoryPage;