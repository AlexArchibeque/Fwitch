import React from 'react';


// import LoginModal from '../login_modal/modal'

import SignUpContainer from '../session/signup_container';
import LoginContainer from '../session/login_container';
import DemoContainer from '../session/demo_container';
import SearchBarContainer from '../searchbar/searchbar_container';

import DropDownContainer from '../dropdown/dropdown_container';

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          login: '',
          signup: '',
          errors: [],
          show: false,
          id: 0
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
                show:true,
                id: 1
            })
                
        }else if (type === 'showSignup'){
            
            this.setState({ signup: <SignUpContainer 
                handleReset={this.handleReset}
                setErrors={this.setErrors}
                /> , 
                show: true,
                id: 0
            })
        }else if(type === 'demoUser' ) {
            this.setState({ login: <DemoContainer
                handleReset={this.handleReset} 
                setErrors={this.setErrors}
                />, 
                show:true,
                id: 2
            })
        }
                
    }

    handleReset() {
        this.setState({ 
            show:false, 
            signup: '', 
            login: '', 
            errors: [] 
        })
    }

    handleTabs(type) {
        if(this.state.id === 2){
            return;
        }else if(type === 'login') {
            this.setState({
            login: <LoginContainer 
            handleReset={this.handleReset} 
            setErrors={this.setErrors}
            />,
            signup: '',
            errors: [],
            id: 1
            })
        }else{
            this.setState({
            login: '',
            signup: <SignUpContainer 
            handleReset={this.handleReset}
            setErrors={this.setErrors}/>,
            errors: [],
            id: 0
            })
        }
    }

    setErrors() {   
        this.setState({
            errors:this.props.errors
        })
    }

    render() {

        // Display element for login
        const display = this.props.currentUser ? (
            <div className="nav-bar-btn-container">
                < DropDownContainer />
            </div>
        ) : (
            <>
                <div className="nav-bar-btn-container">
                    <button className="demo-btn hover-button click-button cursor-pointer" 
                    onClick={() =>this.showForm('demoUser')}>Demo</button>
                    <button 
                    id="login-btn"
                    className="login-btn cursor-pointer" 
                    onClick={() => this.showForm('showLogin')}>Log In</button>
                    <button className="signup-btn hover-button click-button cursor-pointer" 
                    onClick={() => this.showForm('showSignup')}>Sign Up</button>
                </div>
            </>
        )

        // Errors state and show for Modal
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

        return(   
            <>
            <nav className="nav-bar">
                <div className="left-nav-bar-container">
                    <a href="#/" className="cursor-pointer"><img className="flex fwitch-logo" src={window.Fwitchlogo}/></a> 
                    <div className="linked-text-container">
                        <a href="#/directory" className="tw-text hover-text click-text">Browse</a>
                        <a href="#/about" className="tw-text hover-text click-text">About</a>
                    </div>
                </div>

                
                < SearchBarContainer />

                {display}            
            </nav>
            
            <div className={this.state.show ? "show" : "hidden" }>
                <div className="modal-screen" onClick={this.handleReset} >
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
            </div>
            </>
        ) 
    }   
}

export default NavBar;