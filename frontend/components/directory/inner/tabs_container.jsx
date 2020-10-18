import React from 'react';
import { Link } from 'react-router-dom'

class TabsContainer extends React.Component {
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        let hashOfUrl = window.location.hash;
        return(
            <div className="directory-tabs-container">

                    <Link to="/directory" 
                    className={`${hashOfUrl === '#/directory' ? "tab-selected-directory": ""} categories-link-start `}>Categories</Link>

                    <Link to="/directory/clips"  
                    className={`${hashOfUrl === '#/directory/clips' ? "tab-selected-directory": ""} categories-link-other`}>Clips</Link>


            </div>
        )
    }
}

export default TabsContainer;