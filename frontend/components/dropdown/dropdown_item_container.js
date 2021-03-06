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
                <a href={`#/${currentUser.channel.name}`} onClick={this.props.showDropDown} className="dropdown-a-link cursor-pointer">
                    
                    <img src={window.video} className="dropdown-image-icon"/> <p>Channel</p>
                </a>

                <a href="#/settings" onClick={this.props.showDropDown} className="dropdown-a-link cursor-pointer"> 
                    <img src={window.settings} className="dropdown-image-icon"/> <p>Settings</p>
                </a>
                </div>

                <button onClick={this.props.logout} className="dropdown-btn cursor-pointer">
                    <img src={window.signOut} className="dropdown-image-icon"/> <p>Logout</p>
                </button>
            </nav>
        )
    }
}

export default DropDownItemContainer;