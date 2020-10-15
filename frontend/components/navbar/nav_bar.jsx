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
          errors: [],
          show: false
        };

        this.showForm = this.showForm.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleTabs = this.handleTabs.bind(this)

        this.setErrors = this.setErrors.bind(this)
    }

    showForm(type) {
        if(type === 'showLogin'){

            this.setState({ login: <LoginContainer 
                handleReset={this.handleReset} 
                setErrors={this.setErrors}
                />, 
                show:true })

        }else if (type === 'showSignup'){

            this.setState({ signup: <SignUpContainer 
                handleReset={this.handleReset}
                setErrors={this.setErrors}
                /> , 
                show: true})
        }

    }

    handleReset() {
        this.setState({show:false, signup: '', login: '' })
    }

    handleTabs(type) {
        if(type === 'login') {
            this.setState({
            login: <LoginContainer 
            handleReset={this.handleReset} 
            setErrors={this.setErrors}
            />,
            signup: '',
            errors: []
            })
        }else{
            this.setState({
            login: '',
            signup: <SignUpContainer 
            handleReset={this.handleReset}
            setErrors={this.setErrors}/>,
            errors: []
            })
        }
    }

    setErrors() {   
        this.setState({
            errors:this.props.errors
        })
    }



    render() {


        const display = this.props.currentUser ? (
            <div className="nav-bar-btn-container">
                <h2>Hello! {this.props.currentUser.username}</h2>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        ) : (
            <>
                <div className="nav-bar-btn-container">
                <button className="login-btn" onClick={() => this.showForm('showLogin')}>Log In</button>
                <button className="signup-btn hover-button click-button" onClick={() => this.showForm('showSignup')}>Sign Up</button>
                </div>
            </>
        )


        let errors = this.state.errors.length > 0 ? 
        (
        <div className="modal-error-container">

            <div className="modal-error-message-container">
                {this.props.errors.map((err,idx) => { 
                    return(
                    <div key={idx} className="modal-error">{err}</div>
                    )
                })}
            </div>

        </div>) : 
        (
        <div></div>
        )
         
        if(!this.state.show ){
            return(
                <nav className="nav-bar">
                    <a href="#/" className="image-clicker">
                        <img src='/assets/Fwitch-logo.png'/>
                    </a>
                    {display}
                </nav>
            )
        }
        return(   
            <>
            <nav className="nav-bar">
                <a href="#/">
                <img src='/assets/Fwitch-logo.png'/>
                </a> 
                {display}            
            </nav>
            
                <div className="modal-screen"
                    onClick={this.handleReset}
                    >
                    <div className="modal-wrapper">
                        <div className="modal-content"
                            onClick={e=> e.stopPropagation() 
                            }>
                            {/* <button onClick={this.handleReset}>X</button> */}
                            <h4 className="modal-header">{this.state.login ? "Log in to Fwitch" : "Join Fwitch Today"}</h4>
                            <ul className="login-tabs">
        
                            <a 
                            className={`${this.state.login? "tab-selected": ""} hover-text`}
                            onClick={() => this.handleTabs('login')}>
                                Log In
                            </a>
                            
                            <a 
                            className={`${this.state.signup? "tab-selected": ""} hover-text`}
                            onClick={() => this.handleTabs('signup')}>
                                Sign Up
                            </a>

                            </ul>
                            {errors}
                            {this.state.login}
                            {this.state.signup}
                        </div>
                    </div>
                </div>
            </>
        ) 
    }   
}

export default NavBar;