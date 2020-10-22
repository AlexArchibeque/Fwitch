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
        debugger
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
                            <a href={`#/${channels[video.channel_id].name}`}> {channels[video.channel_id].ownerName}</a> 
                            <a href={`#/categories/${categories[video.category_id]}`}>{categories[video.category_id].title}</a>
                        </div>
                        : <div/>}
                        <p>{video.description}</p>
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