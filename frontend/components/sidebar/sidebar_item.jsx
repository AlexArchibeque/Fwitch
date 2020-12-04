import React from 'react'
import { Link } from 'react-router-dom'


class SideBarItem extends React.Component {

    constructor(props){
        super(props)
        this.props = props;

    }


    render(){
        const chan = this.props.channel;

        return (
            <a className="sidebar-outer-link cursor-pointer" href={`#/${chan.name}`}>
                <div className="sidebar-item-container" >
                    
                    <div className="sidebar-left-container">
                        <img src={chan.channelPhoto} />
                    </div>

                    <div className="sidebar-middle-container">
                        <p>{chan.ownerName}</p>
                        <small>{chan.categoryTitle}</small>
                    </div>

                    <div className="sidebar-right-container">
                        Offline
                    </div>
                </div>
            </a>
        )
    }
}

export default SideBarItem