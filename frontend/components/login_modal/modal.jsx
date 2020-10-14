// import React from 'react'
// import SignUpContainer from '../session/signup_container';


// export default class Modal extends React.Component {

//     constructor(props) {
//         super(props)
//         this.props = props
//         this.state = this.props.defaultState

//         this.handleTabs = this.handleTabs.bind(this)
//         this.handleReset = this.handleReset.bind(this)
//     }

//     handleTabs(type) {
//         if(type === 'login') {
//             this.setState({
//             login: 'Login Component',
//             signup: '',
//             })
//         }else{
//             this.setState({
//             login: '',
//             signup: <SignUpContainer handleReset={this.handleReset}/>,
//             })
//         }
//     }

//     handleReset() {
//         this.props.show = false;
//         this.setState({signup: '', login: ''})
//     }

//     render() {
//         if(!this.props.show ){
//             return null;
//         }

//         return(
//             <div>
//                 <h2> Welcome to Fwitch! </h2>
//                 <a onClick={() => this.handleTabs('login')}>Log In</a>
//                 <a onClick={() => this.handleTabs('signup')}>Sign Up</a>

//                 {this.state.login}
//                 {this.state.signup}

//                 <button onClick={this.handleReset}>Close</button>
//             </div>
//         )
//     }
// }

//This was an experiment I am getting rid of now.