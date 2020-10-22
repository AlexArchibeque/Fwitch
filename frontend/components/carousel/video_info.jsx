import React from 'react';
import {connect} from 'react-redux'

class VideoInfo extends React.Component {

    constructor(props){
        super(props)
    }


    render(){
        const {video, channels, categories} = this.props;
        let channelsLoaded = Object.entries(channels).length > 0 ? true : false
        let categoriesLoaded = Object.entries(categories).length > 0 ? true : false 
        if(video === false || video === 0) {
            return(
                <div className="video-info-box-false">
                </div>
            )
        }else{
            return (
                <div className="video-info-box">

                    <div className="left-side-video-info">
                        {channelsLoaded ? <img src={channels[video.channel_id].channelPhoto} /> : <div/> }
                    </div>

                    <div className="right-side-video-info">
                        {channelsLoaded && categoriesLoaded ?
                        <div className="inner-right-side-video-info"> 
                            <a className="right-side-video-channel cursor-pointer"
                            href={`#/${channels[video.channel_id].name}`}> {channels[video.channel_id].ownerName}</a> 
                            <a className="right-side-video-category cursor-pointer"
                            href={`#/directory/${categories[video.category_id].title}`}>{categories[video.category_id].title}</a>
                        </div>
                        : <div/>}
                        {channelsLoaded ?
                        <div className="inner-inner-right-side-video-info">
                            <p className="inner-right-side-description">Current Stream: </p> 
                            <p className="inner-right-side-description">{channels[video.channel_id].description}</p>
                        </div> 
                        : <div/>}
                    </div>
                </div>
            )
        }
    }
}

const mSTP = state => {
    return({
        channels: state.entities.channels,
        categories: state.entities.categories
    })
}


export default connect(mSTP)(VideoInfo);