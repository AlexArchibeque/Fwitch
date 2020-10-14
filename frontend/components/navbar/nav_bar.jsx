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
            <nav className="nav-bar"> 
                {display}            
                <div className="modal-screen"
                    onClick={this.handleReset}
                    >
                    <div className="modal-wrapper">
                        <div className="modal-content"
                            onClick={e=> e.stopPropagation() 
                            }>
                            <button onClick={this.handleReset}>X</button>
                            <h4 className="modal-header">{this.state.login ? "Log in to Fwitch" : "Join Fwitch Today"}</h4>
                            <ul className="login-tabs">

                            
                            <a 
                            className={this.state.login? "tab-selected": ""} 
                            onClick={() => this.handleTabs('login')}>
                                Log In
                            </a>
                        

                            
                            <a 
                            className={this.state.signup? "tab-selected": ""}
                            onClick={() => this.handleTabs('signup')}>
                                Sign Up
                            </a>

                            </ul>
                            <div className="errors">{this.props.errors ? this.props.errors: ''}</div>
                            {this.state.login}
                            {this.state.signup}
                        </div>
                    </div>
                </div>
            </nav>
        ) 
    }   
}

export default NavBar;