import React from 'react';

import ActionCableChatroom from './ac_chatroom'

class ChatRoom extends React.Component {
    constructor(){
        super()

        this.state = {
            body: '',
            
        }

        this.handleSubmitMessage = this.handleSubmitMessage.bind(this)
    }

    handleChange(){
        return(e) => {
            this.setState({body: e.currentTarget.value})
        }
    }

    handleSubmitMessage(){
        if(this.props.user){
        return(e) =>{
            e.preventDefault()
            App.cable.subscriptions.subscriptions[1].sendMessage(
                { 
                    message: this.state.body, 
                    user_id: this.props.user.id,
                    channelName: this.props.match.params.user
                
                }
                )
            this.setState({body: ''})
        }}else{
            return() => {
                document.getElementById('login-btn').click()
            }
        }
    }

    render(){
        return(
            <div className="chatroom-outer-div">
                <div className="top-of-chatroom">STREAM CHAT</div>

                <div className="middle-of-chatroom">
                    < ActionCableChatroom />
                </div>

                <form className="bottom-of-chatroom">
                    <input className="chatroom-input" type="text" placeholder="Send a message"
                        onChange={this.handleChange()}
                        value={this.state.body}
                    />
                    <div className="bottom-bottom-of-chatroom">

                        <div>
                        </div>

                        <button 
                        onClick={this.handleSubmitMessage()}
                        className="chatroom-chat-button hover-button cursor-pointer">Chat</button>
                    </div>
                </form>
            </div>
        )
    }
}   


export default ChatRoom;