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
        <Route path="/friends" render={props => <PrivateRoute component={FriendsList} {...props} /> }/>
      </header>
    </div>
  );
}

export default App;
