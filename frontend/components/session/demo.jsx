// document.getElementById('username').value = 'DemoPowerUser';
// let passwordInput = document.getElementById('password')
// let submit = document.getElementById('login').submit;

// usernameInput.value = "DemoPowerUser";
// passwordInput = "thebestpassword";
// submit();

import React from 'react';

class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        let info = {username: 'DemoPowerUser', password: 'thebestpassword'}
        for(let i = 0; i <= info.username.length; i++){
            setTimeout(()=>{this.setState({username: info.username.slice(0,i) })}, 100 * i);
        }

        for(let i = 0; i <= info.password.length; i++){
            setTimeout(()=>(this.setState({password: info.password.slice(0,i) })), 150 * i)
        }

        setTimeout(this.handleSubmit, 2500);
    }

    handleSubmit(e) {
        // e.preventDefault()
        this.props.login(this.state)
            .then(() => this.props.handleReset())
            .fail(() => this.props.setErrors())
    }


    render(){

        return(
            <>
                <form className="login-form demo-form" id="login">
                    <label>Username
                        <input type="text" 
                        value={this.state.username} 
                        />
                    </label>
                    <label>Password
                        <input type="password" 
                        value={this.state.password} 
                        />
                    </label>             
                <button className="form-submit-button hover-button click-button" onClick={this.handleSubmit} disabled>Login</button>
                
                </form>
            </>
        )
    }
}

export default Demo