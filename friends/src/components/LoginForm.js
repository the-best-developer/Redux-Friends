import React from 'react';
import { connect } from 'react-redux';
import { submitLogin } from '../actions/Friends.js'

class LoginForm extends React.Component {

  constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };

        this.textChangeHandler = this.textChangeHandler.bind(this);
    };

    textChangeHandler (event, target) {
        this.setState({[target]: event.target.value});
    }

    render() {
        return (
            <div>
              <form onSubmit={(event) => {
                event.preventDefault()
                this.props.submitLogin(this.state.username, this.state.password, this.props.history)
              }}>
                <h1>Please Login</h1>
                <input type="text" placeholder="username" onChange={(e) => this.textChangeHandler(e,"username")} value={this.state.username} />
                <input type="text" placeholder="password" onChange={(e) => this.textChangeHandler(e,"password")} value={this.state.password} />
                <button type="submit">Login</button>
              </form>
              {this.props.loginError.error}
            </div>
        );
    }
}

export default connect(((s) => ({loginError: s.loginError})), { submitLogin })(LoginForm);