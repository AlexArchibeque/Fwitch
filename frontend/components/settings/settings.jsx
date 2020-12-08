import React from 'react'

class SettingsPage extends React.Component{

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

    imageSelectHandler(e) {
        const file = e.target.files[0];
        this.setState({
            imgRef: URL.createObjectURL(file),
        });
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

    handleSubmit(type){
        return(e) => {
            e.preventDefault()
            if(type === "image"){
                if(this.state.imgRef === ''){
                    this.setState({imgErr: "You need an image"})
                    return;
                } else {
                let Image = new FormData(e.target)
                this.props.patchUserImage(this.props.currentUser.id, Image)
                    .then( (res) => {
                        this.setState({
                            imgRef: '',
                            img: ''
                        })
                    })
                }
            }else if(type === "video"){
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
    }

    render(){
        return(
            <div className="outer-div-settings">
                <h1>Settings</h1>

                <h1>Profile Picture</h1>
                <div className="image-container-settings">
                    <div className="current-picture-div">
                        <h1>Current Picture</h1>
                        <img src={this.props.currentUser.channelPhotoUrl} />
                    </div>

                    <form onSubmit={this.handleSubmit("image")} className="form-for-image-upload">
                        <label className="user-settings-submit-button cursor-pointer" > Add Profile Picture
                        <input type="file" name="photo" 
                        accept=".jpg,.jpeg,.png,.gif"
                        onChange={this.imageSelectHandler.bind(this)} className="input-for-image"/>
                        </label>
                        <h1>Must be JPEG, PNG, or GIF and cannot exceed 10MB.</h1>
                        <input type="submit" className="user-settings-submit-button cursor-pointer" />
                    </form>

                    <h1>{this.state.imgErr ? this.state.imgErr : ''}</h1>
                    {/* Image Preview */}
                    <div className={`${this.state.imgRef === ''? 'hidden' : 'show-flex' } image-preview-div`}>
                        <h1>Image Preview!</h1>
                        <img src={this.state.imgRef}/>
                    </div>
                </div>


                <h1>Clips</h1>
                <div className="video-container-settings">

                    <form onSubmit={this.handleSubmit("video")} className="form-for-video-upload">
                        
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

            </div>
        )
    }
}

export default SettingsPage;