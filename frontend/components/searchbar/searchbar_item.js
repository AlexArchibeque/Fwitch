import React from "react"


class SearchBarItem extends React.Component {


    render(){

        return(
            <li>{this.props.user.username}</li>
        )
    }
}

export default SearchBarItem;