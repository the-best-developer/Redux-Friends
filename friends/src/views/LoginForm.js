import React from 'react';
import { connect } from 'react-redux';
import { submitLogin } from '../actions/Friends.js'
import Spinner from 'react-spinner-material';

class LoginForm extends React.Component {

  constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };

        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
    };

    textChangeHandler (event, target) {
        this.setState({[target]: event.target.value});
    }

    loginSubmit = e => {
      e.preventDefault()
      this.props.submitLogin(this.state.username, this.state.password).then(_ => {
        if(this.props.loggedIn){
          this.props.history.push("/friends");
        }
      })
    }
    
    render() {
        return (
            <div>
              <form onSubmit={this.loginSubmit}>
                <h1>Please Login</h1>
                <input type="text" placeholder="username" onChange={(e) => this.textChangeHandler(e,"username")} value={this.state.username} />
                <input type="text" placeholder="password" onChange={(e) => this.textChangeHandler(e,"password")} value={this.state.password} />
                <button type="submit">Login</button>
              </form>
              {(this.props.loggingIn) && <Spinner size={30} spinnerColor={"#999"} spinnerWidth={5} visible={true} />}
              {this.props.loginError}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    loginError: state.loginError,
    loggingIn: state.loggingIn,
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps, { submitLogin })(LoginForm);

