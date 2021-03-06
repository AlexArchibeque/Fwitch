import React from 'react'
import {connect} from 'react-redux';
import { createClip, userClips } from '../../actions/clips'

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

            disabledButton: false,
            fileUploading: '',

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
        let urlArr = decodeURI(window.location.hash).split("/");
        let urlId = urlArr[urlArr.length-1];

        return(e) => {
            e.preventDefault()
            this.setState({
                disabledButton: true,
                fileUploading: 'File upload working.'
            })
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
                        disabledButton: false,
                        fileUploading: "File Uploaded!"
                    })
                    this.props.userClips(urlId)
                })
        }
    }


    render(){
        return(
            <div className="video-container-settings">

            <form className="form-for-video-upload" onSubmit={this.handleSubmit()}>
                
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
                <input type="submit" className={`${this.state.disabledButton ? "disabled-button": ''} user-settings-submit-button cursor-pointer`} disabled={this.state.disabledButton} />
            </form>

            {/* Video Preview */}
            <div className={`${this.state.videoRef === ''? 'hidden' : 'show' } video-preview-div`}>
                <h1>Video Preview!</h1>
                <video src={this.state.videoRef} controls />
                <h1>{this.state.fileUploading}</h1>
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
        uploadVideo: (videoInfo) => dispatch(createClip(videoInfo)),
        userClips: (channelName) => dispatch(userClips(channelName))
    })
}

export default connect(mSTP,mDTP)(VideoUpload);