import React from 'react'

class FollowedItem extends React.Component {


    render(){
        const {channel, user} = this.props;
        return(
            <a className="sidebar-outer-link cursor-pointer" href={`#/${channel.name}`}>
                <div className="sidebar-item-container" >
                    
                    <div className="sidebar-left-container">
                        <img src={user[channel.id].photoUrl} />
                    </div>

                    <div className="sidebar-middle-container">
                        <p>{user[channel.id].ownerName}</p>
                        <small>{channel.description}</small>
                    </div>

                    <div className="sidebar-right-container">
                        Offline
                    </div>
                </div>
            </a>
        )
    }
}

export default FollowedItem;