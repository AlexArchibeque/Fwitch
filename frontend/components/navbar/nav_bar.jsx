import React from 'react';
import SignUpContainer from '../session/signup_container';
import Modal from 'react-bootstrap/Modal';



class NavBar extends React.Component {
    constructor(props){

        super(props)
        this.state = {
          showLogin: false,
          showSignup: false
        };

        // this.showForm = this.showForm.bind(this)
    }

    // showForm(type) {
    //     event.preventDefault();
    //     this.setState({ [type]: !this.state[type] })     
    // }

    render() {
        let loginForm;
        let signUpForm;

        // if(this.state.showLogin){
        //     loginForm = 'Login Form Goes Here';
        // }
        // if(this.state.showSignup){
        //     signUpForm = <SignUpContainer />;
        // }

        const display = this.props.currentUser ? (
            <div>
                <h2>Hello! {this.props.currentUser.username}</h2>
                <button onClick={() => this.props.logout}>Logout</button>
            </div>
        ) : (
            <>
                <button className="login-btn" onClick={this.showLogin} >Log In</button>
                <button className="signup-btn" onClick={this.showSignUp} >Sign Up</button>
            </>
        )

        return(
            <nav>
                <Modal>

                </Modal>
                {display}
                {loginForm}
                {signUpForm}
            </nav>
        ) 
    }   
}

export default NavBar;