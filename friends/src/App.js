import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import FriendsList from './components/FriendsList'
import LoginForm from './components/LoginForm'
import AuthCheck from './components/Authentication/AuthCheck'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" render={props => <AuthCheck {...props} />} />
        <Route path="/login" render={props =>  <LoginForm {...props} />} />
        <Route path="/friends" render={props =>  <FriendsList {...props} />} />
      </header>
    </div>
  );
}

export default App;
