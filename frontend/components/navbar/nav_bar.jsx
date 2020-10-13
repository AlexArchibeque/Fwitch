import React from 'react';
import MyModal from '../login_module/module';



class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          showLogin: false,
          showSignup: false
        };
        this.showForm = this.showForm.bind(this)
    }

    showForm(type) {
        event.preventDefault();
        this.setState({ [type]: !this.state[type] })     
    }

    render() {

        const display = this.props.currentUser ? (
            <div>
                <h2>Hello! {this.props.currentUser.username}</h2>
                <button onClick={() => this.props.logout}>Logout</button>
            </div>
        ) : (
            <>
                <button className="login-btn" onClick={() => this.showForm('showLogin')} >Log In</button>
                <button className="signup-btn" onClick={() => this.showForm('showSignup')} >Sign Up</button>
            </>
        )

        return(
            <nav>
                <MyModal state={this.state}/>
                {display}
            </nav>
        ) 
    }   
}

export default NavBar;