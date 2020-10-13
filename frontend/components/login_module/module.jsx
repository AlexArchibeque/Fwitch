import React from 'react';
import Modal from 'react-bootstrap/Modal';
import SignUpContainer from '../session/signup_container';


class myModal extends React.Component  { 
    constructor(props){
        super(props);
        this.props = props
        this.state = {
            signup: '',
            login: ''
        }

        this.handleTabs = this.handleTabs.bind(this)
    }

    handleTabs(type) {
        event.preventDefault();
        if(type === 'login') {
            this.setState({
            login: 'loginContainer',
            signup: ''
            })
        }else{
            this.setState({
            login: '',
            signup: <SignUpContainer />
            })
        }
    }

    render(){
        const {state} = this.props;
        return(
            <>
                <Modal show={(state.showLogin || state.showSignup) && !(state.showLogin && state.showSignup)}>
                    <Modal.Header>
                        <button onClick={() => this.handleTabs('login')}><h2>Log In</h2></button>
                        <button onClick={() => this.handleTabs('signup')}><h2>Sign Up</h2></button>
                    </Modal.Header>
                    <div>{this.login}</div>
                    <div>{this.signup}</div>
                </Modal>
            </>
        )

    }
}

export default myModal
