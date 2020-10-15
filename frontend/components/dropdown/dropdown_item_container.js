import React from 'react'


class DropDownItemContainer extends React.Component {

    render(){

        return(
            <nav onClick={e => e.stopPropagation()} className="dd-item-container">
                <p className="username-container">Logged in As: <strong>{this.props.currentUser.username}</strong></p>
                <button onClick={this.props.logout} className="dropdown-btn cursor-pointer">Logout</button>
            </nav>
        )
    }
}

export default DropDownItemContainer;