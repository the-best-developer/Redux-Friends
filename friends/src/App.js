import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import FriendsList from './views/FriendsList'
import LoginForm from './views/LoginForm'
import PrivateRoute from './components/Authentication/PrivateRoute'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" render={props => <LoginForm {...props} />} />
        <Route path="/login" render={props =>  <LoginForm {...props} />} />
        <PrivateRoute path="/friends" component={FriendsList} />
      </header>
    </div>
  );
}

export default App;
