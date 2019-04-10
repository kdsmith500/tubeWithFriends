import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import ChatRoom from '../ChatRoom/ChatRoom';
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import UsersPage from '../UsersPage/UsersPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() =>
            <LoginPage />
          }/>
          <Route exact path='/signup' render={() =>
            <SignUpPage />
          }/>
          <Route exact path='/home' render={() =>
            <HomePage />
          }/>
          <Route exact path='/profile' render={() =>
            <ProfilePage />
          }/>
          <Route exact path='/chatroom' render={() =>
            <ChatRoom />
          }/>
          <Route exact path='/users' render={() =>
            <UsersPage />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
