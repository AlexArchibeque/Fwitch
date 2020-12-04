import React from 'react';

class ChatRoom extends React.Component {


    render(){
        return(
            <div className="chatroom-outer-div">
                <div className="top-of-chatroom">STREAM CHAT</div>

                <div className="middle-of-chatroom">
                    Chatroom
                </div>

                <form className="bottom-of-chatroom">
                    <input className="chatroom-input" type="text" placeholder="Send a message"/>
                    <div className="bottom-bottom-of-chatroom">
                        <div>
                        </div>

                        <button className="chatroom-chat-button hover-button">Chat</button>
                    </div>
                </form>
            </div>
        )
    }
}   


export default ChatRoom;