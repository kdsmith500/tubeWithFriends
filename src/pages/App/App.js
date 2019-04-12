import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import ChatRoom from '../ChatRoom/ChatRoom';
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import UsersPage from '../UsersPage/UsersPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = { user: null };
  }

  // getInitialState() {
  //   return {
  //       user: null
  //   };
  // }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    console.log('componentDidMount');
    const user = userService.getUser();
    this.setState({ user });
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) =>
            <SignUpPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/home' render={() =>
            <HomePage
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
          }/>
          <Route exact path='/profile' render={() =>
            <ProfilePage
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
          }/>
          <Route exact path='/chatroom' render={() =>
            <ChatRoom
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
          }/>
          <Route exact path='/users' render={() =>
            <UsersPage
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
