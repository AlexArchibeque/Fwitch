import React from 'react'

import ClipItem from './clips_item'



class Clips extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded:false,
            url: this.props.url
        }

    }

    componentWillUnmount(){
        this.props.clearClips()
    }

    componentDidMount(){
        if(this.props.url && this.props.url != 'clips'){
            this.props.categoryClips(this.props.url)
                .then(() => this.setState({loaded: true}))
        }
        else{
        this.props.allClips()
            .then(() => this.setState({loaded: true}))
        }
    }

    render(){
        let values = Object.values(this.props.clips)
        if(values.length < 1){
            return(
                <div></div>
            )
        }
        return(
            <div className="video-item-container">
                {values.map(video => {
                    return(
                        < ClipItem key={video.id} video={video}/>
                    )
                })}
            </div>
        )
    }
}

export default Clips;