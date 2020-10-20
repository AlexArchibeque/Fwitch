import React from 'react'

class ClipItem extends React.Component {
    constructor(props){
        super(props)
        this.props = props
    }

    // window.justChatting = "<%= image_url('Just Chatting.jpg') %>"
    render() {
        const {video} = this.props;
        return(
            <div className="video-container">
                <a href={`#/videos/${video.id}`}>
                    <video src={`${video.videoUrl}`} type="video/mp4"/>
                </a>
                {video.description}
            </div>
        )
    }
}

export default ClipItem;