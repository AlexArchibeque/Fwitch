import React from 'react'

import ChatRoom from './chatrooms/chatroom_container'
import ClipItem from '../directory/clips/clips_item'
import NoClipsContainer from './no_clips_container'

import VideoUploadContainer from './video_upload'

class UserPage extends React.Component {

    constructor(){
        super()
        this.state = {
            updated: false,
            show: 'home'
        }

        this.show = "home"

        this.handleFollow = this.handleFollow.bind(this)
    }

    handleFollow(type){
        if(type === "follow"){
            this.props.followChannel({"channel_id": this.props.channel.id, "user_id": this.props.currentUser.id})
        } else if (type === "unfollow"){
            this.props.unfollowChannel(this.props.channel.id)
        }
    }

    handleShow(type){
        this.setState({
            show: type
        })
        this.show = type
    }

    componentDidMount(){
        let split = window.document.URL.split('/')
        let username = split[split.length - 1]
        this.props.getUser(username)
        this.props.userClips(username)
    }

    // Gets user when switching between channels
    componentDidUpdate(prevProps,prevState,snapshot){
        let urlArr = decodeURI(window.location.hash).split("/");
        let urlId = urlArr[urlArr.length-1];
        if(this.props.channel != undefined){
            if(this.props.channel.name !== urlId){
                this.props.getUser(urlId)
                this.props.userClips(urlId)
                this.show = "home"
            }
        }
    }

    componentWillUnmount(){
        this.props.clearUsers()
    }

    render(){
        const {channel, currentUser, clips} = this.props;

        let followButton;
        let urlArr = decodeURI(window.location.hash).split("/");
        let urlId = urlArr[urlArr.length-1];
        let followed = false;
        let clipsContainer;

        if(clips.includes("No Clips found")){
            clipsContainer = < NoClipsContainer />
        }else{
            clipsContainer = clips ?
            clips.map( clip =>{
                return(
                    <ClipItem key={clip.id} video={clip}/>
                )
            })
            : ''
        }


        if(!channel){ return null }
        if(currentUser){
            if(currentUser.followed_channels){
                currentUser.followed_channels.length > 0 ?  
                    currentUser.followed_channels.forEach( channel => {
                        if(channel.name === urlId){
                            followed = true;
                        }
                    })
                : ''
            }
        }

        followed ? 
        followButton = <button onClick={() => this.handleFollow("unfollow")} className={`follow-unfollow-button hover-button click-button cursor-pointer ${currentUser ? "show" : "hidden"}`} > UnFollow </button>
        : followButton = <button  onClick={() => this.handleFollow("follow")} className={`follow-unfollow-button hover-button click-button cursor-pointer ${currentUser ? "show" : "hidden"}`}> Follow </button>
        let videoUpload;
        if(currentUser){
            if(currentUser.username.toLowerCase() === urlId){
                followButton = ''
                videoUpload = <VideoUploadContainer />
            }
        }

        if(this.state.show === 'home' || this.show === "home"){
        return(
            <div className="outermost-div-for-user-page">
                <div className="user-page-left-container">

                    <div className="directory-tabs-container-user-page ">
                        <a 
                        className = {`${this.show === "home" ? "tab-selected-directory": ""} categories-link-other cursor-pointer`}
                        onClick={() => this.handleShow("home")}>Home</a>
                        <a 
                        className = {`${this.show === 'videos' ? "tab-selected-directory": ""} categories-link-start cursor-pointer`}
                        onClick={() => this.handleShow("videos")}>Videos</a>
                    </div>

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
                            {followButton}
                        </div>

                    </div>
                </div>

                <ChatRoom />
            
            </div>
        )}
        else{
            return(
                <div className="outermost-div-for-user-page">
                    <div className="user-page-left-container">
                        <div className="directory-tabs-container-user-page ">
                            <a 
                            className = {`${this.show === "home" ? "tab-selected-directory": ""} categories-link-other cursor-pointer`}
                            onClick={() => this.handleShow("home")}>Home</a>
                            <a 
                            className = {`${this.show === 'videos' ? "tab-selected-directory": ""} categories-link-start cursor-pointer`}
                            onClick={() => this.handleShow("videos")}>Videos</a>
                        </div>
                        <ul className="ul-container-for-clips-user-page">
                            {clipsContainer}
                        </ul>


                        {videoUpload}


                    </div>
                    <ChatRoom />
                </div>
            )
        }
    }
}

export default UserPage;