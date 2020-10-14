import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.login(this.state)
            .then(() => this.props.handleReset())
            .fail(() => this.props.setErrors())
    }

    handleInput(type) {
        return(e) =>{
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    render(){

        return(
            <>
                <form className="login-form">

                <label>Username
                    <input type="text" 
                    value={this.state.username} 
                    onChange={this.handleInput('username')}/>
                </label>

                <label>Password
                    <input type="password" 
                    value={this.state.password} 
                    onChange={this.handleInput('password')}/>
                </label>

                
                <button className="form-submit-button" onClick={this.handleSubmit}>Login</button>
                
                </form>
            </>
        )
    }
}

export default Login