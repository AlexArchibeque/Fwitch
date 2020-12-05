import React from 'react'

import SideBarItem from './sidebar_item'
import FollowedContainer from './followed-section/followed_container'

class Sidebar extends React.Component {

    componentDidMount(){
        this.props.allChannels()
    }

    render(){
        const {channels, currentUser} = this.props;
        
        let recommendedChannels = Object.entries(channels).length > 0 ? 
        Object.values(channels).slice(2,7).map(channel => {
            return(
                <SideBarItem 
                key={channel.id} 
                channel={channel} />
                )
            })
            : <div></div>

        let followedChannels = currentUser ? <FollowedContainer /> :''

        return(
            <div className='sidebar-container'>
                <p className={`${ currentUser ? 'show-flex': 'hidden'}`}>FOLLOWED CHANNELS</p>
                { followedChannels }
                <p>RECOMMENDED CHANNELS</p>
                {recommendedChannels}
            </div>
        )
    }
}

export default Sidebar;