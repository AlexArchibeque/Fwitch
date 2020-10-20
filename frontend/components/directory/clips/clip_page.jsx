import React from 'react';
import {getaClip, clearClips} from '../../../actions/clips'
import {connect} from 'react-redux';


class ClipPage extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            done:false
        }

        this.clipProm = this.clipProm.bind(this)
    }

    componentDidMount(){
        this.clipProm()
    }

    componentWillUnmount() {
        this.props.clearClips();
    }

    clipProm(){
        let clipArr = decodeURI(window.location.hash).split("/");
        let clipId = parseInt(clipArr[clipArr.length-1])
        return new Promise(() => this.props.getaClip(clipId))
                    .then(this.setState({done: true}) )
    }

    render() {
        const {clip} = this.props;
        let value = Object.values(clip)[0]
        if(Object.entries(clip).length > 0 ){         
            return (
                <div className="clip-page-container">
                    <video src={`${value.videoUrl}`} controls />
                    <p>{value.description}</p>
                </div>
            ) 
        } 
        else {
            return(
                <div className="loader"></div>
            )
        }
    }
}


const mSTP = state => {
    return({
        clip: state.entities.clips
    })
}

const mDTP = dispatch => ({
    getaClip: (clipId) => dispatch(getaClip(clipId)),
    clearClips: () => dispatch(clearClips())
})


export default connect(mSTP,mDTP)(ClipPage);
