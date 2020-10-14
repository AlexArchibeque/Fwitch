import React from 'react';
// import MyModalContainer from '../login_module/modal_container';
import Modal from 'react-bootstrap/Modal';
import SignUpContainer from '../session/signup_container';



class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          showLogin: false,
          showSignup: false,
          login: '',
          signup: '',
          show: false
        };

        this.showForm = this.showForm.bind(this)
        this.handleTabs = this.handleTabs.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    showForm(type) {
        // event.preventDefault();
        this.setState({ [type]: !this.state[type], show:true })     
    }

    handleTabs(type) {
        if(type === 'login') {
            this.setState({
            login: 'Login Component',
            signup: '',
            })
        }else{
            this.setState({
            login: '',
            signup: <SignUpContainer />,
            })
        }
    }

    handleReset() {
        this.setState({signup: '', login: '', show:false})
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


        return(
            
            <div> 
                {display}

                <Modal 
                show={this.state.show}
                onHide={this.handleReset}
                centered
                >
                    <Modal.Header>
                        <Modal.Title><h2> Welcome to Fwitch! </h2></Modal.Title>
                        <a onClick={() => this.handleTabs('login')}>Log In</a>
                        <a onClick={() => this.handleTabs('signup')}>Sign Up</a>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.login}
                        {this.state.signup}
                    </Modal.Body>
                    <Modal.Footer>
                        This Is the Footer
                        <button onClick={this.handleReset}>Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        ) 
    }   
}

export default NavBar;