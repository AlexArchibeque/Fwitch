import React from 'react'


class DropDownItemContainer extends React.Component {

    render(){
        const {currentUser} = this.props
        return(
            <nav onClick={e => e.stopPropagation()} className="dd-item-container">

                <p className="username-container">
                    <img src={currentUser.channelPhotoUrl} className="dropdown-item-image"/>
                    <strong>{this.props.currentUser.username}</strong>
                </p>
                <div className="a-link-div-container-dropdown">
                <a href={`#/${currentUser.channel.name}`} className="dropdown-a-link cursor-pointer">
                    
                    <img src={window.video} className="dropdown-image-icon"/>Channel
                </a>

                <a href="#/settings" className="dropdown-a-link cursor-pointer"> 
                    <img src={window.settings} className="dropdown-image-icon"/> Settings
                </a>
                </div>

                <button onClick={this.props.logout} className="dropdown-btn cursor-pointer">
                    <img src={window.signOut} className="dropdown-image-icon"/> Logout
                </button>
            </nav>
        )
    }
}

export default DropDownItemContainer;