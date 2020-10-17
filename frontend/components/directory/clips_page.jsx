import React from 'react';

import TabsContainer from './inner/tabs_container'
import ClipsContainer from './clips/clips_container'

class ClipsPage extends React.Component{

    render() {
        return(
            <div className="directory-container">
                <h1> Clips Page! </h1>
                <TabsContainer />
                <ClipsContainer />
            </div>
        )
    }
}

export default ClipsPage;