import React from 'react';


// import LoginModal from '../login_modal/modal'

import SignUpContainer from '../session/signup_container';
import LoginContainer from '../session/login_container'; 




class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          login: '',
          signup: '',
          show: false
        };

        this.showForm = this.showForm.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleTabs = this.handleTabs.bind(this)
    }

    showForm(type) {
        if(type === 'showLogin'){
            this.setState({ login: <LoginContainer handleReset={this.handleReset} />, show:true })
        }else if (type === 'showSignup'){
            this.setState({ signup: <SignUpContainer handleReset={this.handleReset}/> , show: true})
        }
    }

    handleReset() {
        this.setState({show:false, signup: '', login: ''})
    }

    handleTabs(type) {
        if(type === 'login') {
            this.setState({
            login: <LoginContainer handleReset={this.handleReset} />,
            signup: '',
            })
        }else{
            this.setState({
            login: '',
            signup: <SignUpContainer handleReset={this.handleReset}/>,
            })
        }
    }



    render() {

        const display = this.props.currentUser ? (
            <div>
                <h2>Hello! {this.props.currentUser.username}</h2>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        ) : (
            <>
                <button className="login-btn" onClick={() => this.showForm('showLogin')} >Log In</button>
                <button className="signup-btn" onClick={() => this.showForm('showSignup')} >Sign Up</button>
            </>
        )
         
        if(!this.state.show ){
            return(
                <div>
                    {display}
                </div>
            )
        }
        return(   
            <div> 
                {display}            
                <div className="modal-screen"
                    onClick={this.handleReset}
                    >
                    <div className="modal-content"
                        onClick={e=> e.stopPropagation() 
                        }>
                        Welcome to Fwitch!
                        <a onClick={() => this.handleTabs('login')}>Log In</a>
                        <a onClick={() => this.handleTabs('signup')}>Sign Up</a>
                        {this.state.login}
                        {this.state.signup}
                        <button onClick={this.handleReset}>Close</button>
                    </div>
                </div>
            </div>
        ) 
    }   
}

export default NavBar;