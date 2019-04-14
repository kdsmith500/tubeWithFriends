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

const icons = ['./images/icon-computer.png', './images/icon-girl-1.png', './images/icon-boombox.png',
  './images/icon-guy-1.png', './images/icon-television.png', './images/icon-girl-2.png',
  './images/icon-laptop.png', './images/icon-guy-2.png', './images/icon-tablet.png', 
  './images/icon-girl-3.png'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      homeIcon1: './images/icon-computer.png',
      homeIcon2: './images/icon-boombox.png',
      homeIcon3: './images/icon-television.png',
      homeIcon5: './images/icon-laptop.png',
      homeIcon4: './images/icon-tablet.png'
    };
  }

  handleHomeIcon1 = () => {
    let idx = randomService.randomTen();
    console.log(`${idx}`);
    this.setState({ homeIcon1: icons[idx] });
  }

  handleHomeIcon2 = () => {
    let idx = randomService.randomTen();
    console.log(`${idx}`);
    this.setState({ homeIcon2: icons[idx] });
  }

  handleHomeIcon3 = () => {
    let idx = randomService.randomTen();
    console.log(`${idx}`);
    this.setState({ homeIcon3: icons[idx] });
  }

  handleHomeIcon4 = () => {
    let idx = randomService.randomTen();
    console.log(`${idx}`);
    this.setState({ homeIcon4: icons[idx] });
  }
  
  handleHomeIcon5 = () => {
    let idx = randomService.randomTen();
    console.log(`${idx}`);
    this.setState({ homeIcon5: icons[idx] });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleUpdateUserProfile = (updateUserProfile) => {
    this.setState({ updateUserProfile });
  }
  
  handleUpdateUserProfileEdit = (updateUserProfileEdit) => {
    this.setState({ updateUserProfileEdit });
  }

  handleUpdateRemoveUser = (updateRemoveUser) => {
    this.setState({ updateRemoveUser });
  }

  handleUpdateUsers = (UpdateUsers) => {
    this.setState({ UpdateUsers });
  }

  // handleEdit = (e) => {
  //   // this.props.updateMessage('');
  //   this.setState({
  //       // Using ES2015 Computed Property Names
  //       [e.target.name]: e.target.value
  //   });
  // }

  // handleSubmitEdit = async (e) => {
  //   e.preventDefault();
  //   try {
  //       await userService.edit(this.state);
  //       // Let <App> know a user has signed up!
  //       this.handleEdit();
  //       // Successfully signed up - show GamePage
  //       this.props.history.push('/profile');
  //   } catch (err) {
  //       // Invalid user data (probably duplicate email)
  //       // this.props.updateMessage(err.message);
  //   }
  // }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    console.log('componentDidMount');
    // const userProfile = await userService.show();
    // const userProfileEdit = await userService.edit();
    // const users = await userService.index();
    // const removeUser = await userService.remove();
    const userProfileEdit = await userService.edit();
    this.handleUpdateUserProfileEdit(userProfileEdit);
    const userProfile = await userService.show();
    this.handleUpdateUserProfile(userProfile);
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
                user={this.state.user}
                handleLogout={this.handleLogout}
                homeIcon1={this.state.homeIcon1}
                homeIcon2={this.state.homeIcon2}
                homeIcon3={this.state.homeIcon3}
                homeIcon4={this.state.homeIcon4}
                homeIcon5={this.state.homeIcon5}
                handleHomeIcon1={this.handleHomeIcon1}
                handleHomeIcon2={this.handleHomeIcon2}
                handleHomeIcon3={this.handleHomeIcon3}
                handleHomeIcon4={this.handleHomeIcon4}
                handleHomeIcon5={this.handleHomeIcon5}
              />
            :
              <Redirect to='/'/>
          }/>
          <Route exact path='/profile' render={(history) =>
            userService.getUser() ? 
              <ProfilePage
                history={history}
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            :
              <Redirect to='/'/>
          }/>
          <Route exact path='/chatroom' render={() =>
            userService.getUser() ? 
              <ChatRoomPage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            :
              <Redirect to='/'/>
          }/>
          <Route exact path='/users' render={() =>
            userService.getAdmin() ? 
              <UsersPage
                user={this.state.user}
                handleLogout={this.handleLogout}
                handleUpdateUsers={this.handleUpdateUsers}
                handleUpdateRemoveUser={this.handleUpdateRemoveUser}
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
