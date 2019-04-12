import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import ChatRoomPage from '../ChatRoomPage/ChatRoomPage';
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import UsersPage from '../UsersPage/UsersPage';
import userService from '../../utils/userService';
import randomService from '../../utils/randomService';

const icons = ['./images/icon-computer.png', './images/icon-boombox.png',
  './images/icon-television.png', './images/icon-laptop.png', './images/icon-tablet.png',
  './images/icon-girl-1.png', './images/icon-guy-1.png', './images/icon-girl-2.png',
  './images/icon-guy-2.png', './images/icon-girl-3.png'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      icon1: './images/icon-computer.png',
      icon2: './images/icon-boombox.png',
      icon3: './images/icon-television.png',
      icon4: './images/icon-tablet.png',
      icon5: './images/icon-laptop.png'
    };
  }

  // getInitialState() {
  //   return {
  //       user: null
  //   };
  // }

  handleIcon1 = () => {
    let idx = randomService.randomTen();
    console.log(`${idx}`);
    this.setState({ icon1: icons[idx] });
  }

  handleIcon2 = () => {
    let idx = randomService.randomTen();
    console.log(`${idx}`);
    this.setState({ icon2: icons[idx] });
  }

  handleIcon3 = () => {
    let idx = randomService.randomTen();
    console.log(`${idx}`);
    this.setState({ icon3: icons[idx] });
  }

  handleIcon4 = () => {
    let idx = randomService.randomTen();
    console.log(`${idx}`);
    this.setState({ icon4: icons[idx] });
  }
  
  handleIcon5 = () => {
    let idx = randomService.randomTen();
    console.log(`${idx}`);
    this.setState({ icon5: icons[idx] });
  }

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
            userService.getUser() ? 
              <HomePage
                handleLogout={this.handleLogout}
                user={this.state.user}
                icon1={this.state.icon1}
                icon2={this.state.icon2}
                icon3={this.state.icon3}
                icon4={this.state.icon4}
                icon5={this.state.icon5}
                handleIcon1={this.handleIcon1}
                handleIcon2={this.handleIcon2}
                handleIcon3={this.handleIcon3}
                handleIcon4={this.handleIcon4}
                handleIcon5={this.handleIcon5}
              />
            :
              <Redirect to='/'/>
          }/>
          <Route exact path='/profile' render={() =>
            userService.getUser() ? 
              <ProfilePage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            :
              <Redirect to='/'/>
          }/>
          <Route exact path='/chatroom' render={() =>
            userService.getUser() ? 
              <ChatRoomPage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            :
              <Redirect to='/'/>
          }/>
          <Route exact path='/users' render={() =>
            userService.getUser() ? 
              <UsersPage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            :
              <Redirect to='/'/>
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
