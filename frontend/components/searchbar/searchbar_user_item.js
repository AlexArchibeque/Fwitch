import React from "react"


class UserSearchBarItem extends React.Component {


    render(){
        const {channel} = this.props;
        return(
            <a className="searchbar-link cursor-pointer" href={`#/${channel.name}`} onClick={this.props.handleClick }>
                <img className="user-searchbar-img" src={channel.pictureUrl}/>
                <li>{channel.username}</li>
            </a>
        )
    }
}

export default UserSearchBarItem;