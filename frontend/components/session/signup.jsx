import React from 'react';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            email:'',
            password:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then(() => this.props.handleReset())
            .fail(() => this.props.setErrors())
        
    }

    render() {
        return(
            <>
                <form className="signup-form">
                    <label>Username
                    <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
                    </label>
                    <label>Email
                    <input type="email" value={this.state.email} onChange={this.handleInput('email')}/>
                    </label>
                    <label>Password
                    <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    
                    <button className="form-submit-button hover-button click-button" onClick={this.handleSubmit}>Sign Up </button>
                    
                </form>
            </>
        )
    }
}

export default Signup;