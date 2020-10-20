import React from 'react';

const VideoInfo = ({video})=> {
    if(video === false) {
        return(
            <div className="video-info-box-false">
                {video.description}
            </div>
        )
    }
    return (
        <div className="video-info-box">
            <div className="inside-video-info-box">
                {video.description}
            </div>
        </div>
    )
}

export default VideoInfo;