import React from 'react'

class ClipItem extends React.Component {
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        const {video, channels} = this.props;
        return(
            <div className="video-container">
                <a href={`#/videos/${video.id}`} className="stream">
                    <video src={`${video.videoUrl}`} 
                    type="video/mp4" 
                    className="video-container-stuff stream__thumbnail"/>
                </a>
                <p>{video.description}</p>
            </div>
        )
    }
}

export default ClipItem;