import React from 'react'

import FollowedItem from './followed_item'

class Followed extends React.Component {


    render(){
        let followedChannels = this.props.followedChannels ? 
            this.props.followedChannels.map(channel => {
                return(
                    <FollowedItem key={channel.id} channel={channel} user={this.props.currentUser}/>
                )
            })

        : ''
        return(
            <ul>
                {followedChannels}
            </ul>
        ) 
    }
}

export default Followed