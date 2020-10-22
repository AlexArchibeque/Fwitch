import React from 'react';
import {connect} from 'react-redux'

class VideoInfo extends React.Component {

    constructor(props){
        super(props)


    }

    componentWillUnmount(){
        this.setState({
            loaded:false
        })
    }


    render(){
        const {video, channels, categories} = this.props;
        let channelsLoaded = Object.entries(channels).length > 0 ? true : false 
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
                        {channelsLoaded ? <a href={`#/${channels[video.channel_id].name}`}> {channels[video.channel_id].ownerName}</a> : <div/>}
                        {video.description}
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