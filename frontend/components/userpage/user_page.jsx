import React from 'react'

import ChatRoom from './chatrooms/chatroom_container'

class UserPage extends React.Component {

    constructor(){
        super()
        this.state = {
            updated: false
        }
    }

    componentDidMount(){
        let split = window.document.URL.split('/')
        let username = split[split.length - 1]

        this.props.getUser(username)
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        let urlArr = decodeURI(window.location.hash).split("/");
        let urlId = urlArr[urlArr.length-1];
        if(this.props.channel != undefined){
            if(this.props.channel.name !== urlId){
                this.props.getUser(urlId)
            }
        }
    }

    componentWillUnmount(){
        this.props.clearUsers()
    }

    render(){
        const {channel} = this.props;
        if(!channel){ return null }
        return(
            <div className="outermost-div-for-user-page">

                <div className="user-page-left-container">
                    <div className="user-page-stream-container">
                        <video controls className="user-page-video">
                            <source src="" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="user-page-current-stream-info">

                        <div className="left-user-page-current-stream-info">
                            <img className="user-page-image" src={channel.channelPhoto} />

                            <div className="left-user-page-current-stream-paras">
                                <p className="user-page-username"> {channel.username} </p>
                                <p className="user-page-channel-description"> {channel.description} </p>
                                <a href={`#/directory/${channel.category.title}`}
                                className="user-page-category"
                                >{channel.category.title}</a>
                            </div>
                        </div>


                        <div className="right-user-page-current-stream-info">
                            <button className="follow-unfollow-button hover-button click-button cursor-pointer">
                                Follow
                            </button>
                        </div>

                    </div>

                    <div className="user-page-streamer-info">
                        <p>Videos</p>
                        <p>Followers</p>
                        <p>Follows</p>
                    </div>
                    
                </div>

                <ChatRoom />
            
            </div>
        )
    }
}

export default UserPage;