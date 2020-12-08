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
                let Image = new FormData(e.target)
                this.props.patchUserImage(this.props.currentUser.id, Image)
            }else if(type === "video"){
                let Category = e.target.category.value
                let vidDescription = this.state.vidDescription
                let videoObject = this.state.video

            }
        }
    }

    render(){
        return(
            <div className="outer-div-settings">
                <h1>Settings</h1>

                <h1>Profile Picture</h1>
                <div className="image-container-settings">

                    <form onSubmit={this.handleSubmit("image")}>
                        <input type="file" name="photo" onChange={this.imageSelectHandler.bind(this)} />
                        <input type="submit" />
                    </form>

                    {/* Image Preview */}
                    <img src={this.state.imgRef} />
                </div>


                <h1>Clips</h1>
                <div className="video-container-settings">

                    <form onSubmit={this.handleSubmit("video")}>
                        <input type="file" name="video" onChange={this.videoSelectHandler.bind(this)} />
                        <input type="text" onChange={this.handleChange("vidDescription")} value={this.state.vidDescription}/>
                        <select name="category">
                            {this.state.categories.map(category => {
                                return(
                                    <option value={category} key={category}>{category}</option>
                                )
                            })}
                        </select>
                        <input type="submit" />
                    </form>

                    {/* Video Preview */}
                    <video src={this.state.videoRef} controls className={`${this.state.videoRef === ''? 'hidden' : 'show' }`} />
                </div>

            </div>
        )
    }
}

export default SettingsPage;