import React from 'react'

import FollowedItem from './followed_item'

class Followed extends React.Component {


    render(){

        return(
            <h1>
                <FollowedItem />
                Followed container
            </h1>
        ) 
    }
}

export default Followed