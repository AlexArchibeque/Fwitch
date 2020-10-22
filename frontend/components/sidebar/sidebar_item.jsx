import React from 'react'


class SideBarItem extends React.Component {

    constructor(props){
        super(props)
        this.props = props;

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){

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