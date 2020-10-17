import React from 'react';
import { Link } from 'react-router-dom'

class TabsContainer extends React.Component {
    render() {
        return(
            <div>
                <Link to="/directory">Categories</Link>
                <Link to="/directory/clips">Clips</Link>
            </div>
        )
    }
}

export default TabsContainer;