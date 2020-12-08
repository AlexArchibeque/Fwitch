import React from 'react'
import {connect} from 'react-redux';
import { createClip } from '../../actions/clips'

class VideoUpload extends React.Component {

    constructor(){
        super()

        this.state={
            imgRef: '',
            img: '',

            videoRef: '',
            vidDescription: '',
            video: '',

            imgErr: [],

            categories:["Among Us", "Dungeons and Dragons", "Grand Theft Auto Five",
            "Just Chatting", "League Of Legends", "Mine Craft", "Super Metroid"]
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    videoSelectHandler(e) {
        const file = e.target.files[0];
        this.setState({
            videoRef: URL.createObjectURL(file),
            video: file
        });
    }

    handleChange(type){
        return(e) => {
            this.setState({
                [type]: e.currentTarget.value
            })
        }
    }

    handleSubmit(){

        return(e) => {
            e.preventDefault()
            let formData = new FormData(e.target)
            formData.append('category',e.target.category.value)
            formData.append('description', this.state.vidDescription)
            formData.append('video', this.state.video)
            
            this.props.uploadVideo(formData)
                .then( (res) => {
                    this.setState({
                        videoRef: '',
                        vidDescription: '',
                        video: '',
                    })
                })
        }
    }


    render(){
        return(
            <div className="video-container-settings">

            <form onSubmit={this.handleSubmit()} className="form-for-video-upload">
                
                <h1>Video</h1>
                <label className="user-settings-submit-button cursor-pointer">Upload Video
                <input type="file" name="video" onChange={this.videoSelectHandler.bind(this)} className="input-for-video"/>
                </label>
                <h1>Description</h1>
                <input type="text" onChange={this.handleChange("vidDescription")} value={this.state.vidDescription} className="searchbar-input custom-input-settings"/>
                <h1>Category</h1>
                <select name="category" className="cursor-pointer">
                    {this.state.categories.map(category => {
                        return(
                            <option value={category} key={category}>{category}</option>
                        )
                    })}
                </select>
                <input type="submit" className="user-settings-submit-button cursor-pointer" />
            </form>

            {/* Video Preview */}
            <div className={`${this.state.videoRef === ''? 'hidden' : 'show' } video-preview-div`}>
                <h1>Video Preview!</h1>
                <video src={this.state.videoRef} controls />
            </div>
        </div>
        )
    }
}


const mSTP = state => {
    return({
    })
}

const mDTP = dispatch => {
    return({
        uploadVideo: (videoInfo) => dispatch(createClip(videoInfo))
    })
}

export default connect(mSTP,mDTP)(VideoUpload);