import React from 'react';
import DropdownItemContainer from './dropdown_item_container'

class DropDown extends React.Component {
    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            show: false
        }   

        this.showDropDown = this.showDropDown.bind(this)
    }

    showDropDown() {
        this.setState({show: !this.state.show })
    } 

    render(){
        const {currentUser} = this.props
        let dropdownItemContainer = this.state.show ? 
        <DropdownItemContainer 
            logout={this.props.logout} 
            currentUser={currentUser}
            /> : 
        <div></div>
        return (
            <a onClick={this.showDropDown} className="dropdown-main">
                <img src={currentUser.channelPhotoUrl} className="cursor-pointer dropdown-image"/>
                {dropdownItemContainer}
            </a>
        )
    }
}

export default DropDown;
