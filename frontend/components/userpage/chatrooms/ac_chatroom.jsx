import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class ACChatroom extends React.Component {

    constructor(){
        super()
        this.state = {
            messages: [],
        }
        this.channel;
    }

    componentWillMount(){
        this.channel = App.cable.subscriptions.create(
            {channel: 'ChatRoomChannel', id: this.props.match.params.user},
            {
                received: (data) => {
                    this.setState({
                        messages: [...this.state.messages, [data.message, data.username]]
                    })
                },
                // Adds the function to the subscription
                sendMessage: function(data) {
                    return this.perform("sendMessage", data)
                }

            }
        )
    }

    componentDidUpdate(prevProps) {
        // Takes us out of previous chat room and subscribes to new chatroom
        if (prevProps.match.params.user !== this.props.match.params.user) {
          this.channel.unsubscribe()
          this.channel = App.cable.subscriptions.create(
            {channel: 'ChatRoomChannel', id: this.props.match.params.user},
            {
                received: (data) => {
                    this.setState({
                        messages: [...this.state.messages, [data.message, data.username]]
                    })
                },
                sendMessage: function(data) {
                    return this.perform("sendMessage", data)
                }

            }
            )
            this.setState({
                messages: [],
            })
        }
      }

    render(){
        let messageList = this.state.messages.map((message,idx) => {
            let username = message[1];
            let body = message[0];
            return(
                <li key={idx} className="message-in-chat-room">
                    <span className="text-in-chat">
                        <span className="username-chat">{username}</span>:   {body}
                    </span>
                </li>
            )
        })
        return (
            <ul className="container-for-messages">
                {messageList}
            </ul> 
        )
    }
}

const mSTP = state => {
    return({

    })
}

const mDTP = dispatch => {
    return({

    })
}   

export default withRouter(connect(mSTP,mDTP)(ACChatroom));