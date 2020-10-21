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
            <div className="sidebar-item-container cursor-pointer" onClick={() => handleClick(chan.name)}>
                <div className="sidebar-left-container">
                    <img src={chan.channelPhoto} />
                </div>
                <div className="sidebar-middle-container">
                    {chan.description}
                </div>
                <div className="sidebar-right-container">
                    Offline
                </div>
            </div>
        )
    }
}

export default SideBarItem