import React from 'react'

class ClipItem extends React.Component {
    constructor(props){
        super(props)
        this.props = props
    }

    // componentDidMount(){
    //     if(this.props.channels[this.props.video.channel_id] === undefined){
    //         this.props.getChannel(this.props.video.channel_id)
    //     }
    // }

    // window.justChatting = "<%= image_url('Just Chatting.jpg') %>"
    render() {
        const {video, channels} = this.props;
        // let channel = this.props.channels[video.channel_id] != undefined ? true : false
        return(
            <div className="video-container">
                <a href={`#/videos/${video.id}`}>
                    <video src={`${video.videoUrl}`} type="video/mp4"/>
                </a>
                {/* {channel ?
                <div className='video-right-side-container'> 
                    <img src={channels[video.channel_id].channelPhoto} />
                    <div className="video-inner-text-right-side">
                        <p>{channels[video.channel_id].ownerName}</p>
                    </div>
                </div>
                
                :
                <div/>} */}
                <p>{video.description}</p>
            </div>
        )
    }
}

export default ClipItem;