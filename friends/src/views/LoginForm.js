import React from 'react';
import { connect } from 'react-redux';
import { submitLogin } from '../actions/Friends.js'
import Spinner from 'react-spinner-material';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";

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

    toFriends() {
      this.props.history.push('/friends')
    }
    

    render() {
      const key = localStorage.getItem('loginKey');
      console.log(this.props, key)
      if(key) {
        //return  <Redirect to="/friends" />
      }
        return (
            <div>
              <button onClick={() => this.toFriends()}>????</button>
              <form onSubmit={(event) => {
                event.preventDefault()
                this.props.submitLogin(this.state.username, this.state.password, this.props.history)
              }}>
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
const LoginFormWithRouter = withRouter(LoginForm);
export default connect(mapStateToProps, { submitLogin })(LoginFormWithRouter);

