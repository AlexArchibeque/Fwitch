import React from 'react'
import VideoInfoBox from './video_info'

class CarouselItem extends React.Component {

    componentWillUnmount(){
        
    }

    render(){ 
        const {video} = this.props
        let controlled = false;
        let showVidInfo = '';
        if(this.props.extraCN === 'slider-item-front'){
            controlled = true;
            showVidInfo = <VideoInfoBox video={video}/>
        }else{
            controlled = false;
            showVidInfo = <VideoInfoBox video={false}/>;
        }

        return(
            <div className={`slider-item ${this.props.extraCN}`} 
            onClick={() => this.props.handleOutsideClick(this.props.idx)}>
                <video src={video.videoUrl} controls={controlled} id={`video${this.props.idx}`}>
                </video>

                {showVidInfo}
            </div>
        )
    }
}

export default CarouselItem;