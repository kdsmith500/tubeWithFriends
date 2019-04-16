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

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'grey'];

const toggle = ['', 'HomeBanner-img'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      homeIcon1: './images/icon-computer.png',
      homeIconStyle1: '',
      homeIcon2: './images/icon-boombox.png',
      homeIconStyle2: '',
      homeIcon3: './images/icon-television.png',
      homeIconStyle3: '',
      homeIcon4: './images/icon-laptop.png',
      homeIconStyle4: '',
      homeIcon5: './images/icon-tablet.png',
      homeIconStyle5: '',
      homeProfileHr: 'black',
      homeRooms: 'black',
      loginSignUp: 'black',
      loginSignUpHr: 'black',
      loginSignUpTitle: 'black',
      navTitle: 'grey',
      navWelcome: 'grey',
      profileBio: 'black',
      profileEdit: 'black',
      profileEmail: 'black',
      profileTitle: 'black'
    };
  }

  /*--- Style Handlers ---*/

  handleHomeIcon1 = () => {
    let idx = randomService.randomTen();
    this.setState({ homeIcon1: icons[idx] });
  }

  handleHomeIcon2 = () => {
    let idx = randomService.randomTen();
    this.setState({ homeIcon2: icons[idx] });
  }

  handleHomeIcon3 = () => {
    let idx = randomService.randomTen();
    this.setState({ homeIcon3: icons[idx] });
  }

  handleHomeIcon4 = () => {
    let idx = randomService.randomTen();
    this.setState({ homeIcon4: icons[idx] });
  }
  
  handleHomeIcon5 = () => {
    let idx = randomService.randomTen();
    this.setState({ homeIcon5: icons[idx] });
  }

  handleHomeIconClick1 = () => {
    if (this.state.homeIconStyle1 === '') {
      this.setState({ homeIconStyle1: toggle[1] });
    } else {
      this.setState({ homeIconStyle1: toggle[0] });
    }
  }

  handleHomeIconClick2 = () => {
    if (this.state.homeIconStyle2 === '') {
      this.setState({ homeIconStyle2: toggle[1] });
    } else {
      this.setState({ homeIconStyle2: toggle[0] });
    }
  }

  handleHomeIconClick3 = () => {
    if (this.state.homeIconStyle3 === '') {
      this.setState({ homeIconStyle3: toggle[1] });
    } else {
      this.setState({ homeIconStyle3: toggle[0] });
    }
  }

  handleHomeIconClick4 = () => {
    if (this.state.homeIconStyle4 === '') {
      this.setState({ homeIconStyle4: toggle[1] });
    } else {
      this.setState({ homeIconStyle4: toggle[0] });
    }
  }

  handleHomeIconClick5 = () => {
    if (this.state.homeIconStyle5 === '') {
      this.setState({ homeIconStyle5: toggle[1] });
    } else {
      this.setState({ homeIconStyle5: toggle[0] });
    }
  }

  handleHomeProfileHr = () => {
    let idx = randomService.randomNine();
    this.setState({ homeProfileHr: colors[idx] });
  }

  handleHomeRooms = () => {
    let idx = randomService.randomNine();
    this.setState({ homeRooms: colors[idx] });
  }

  handleLoginSignUp = () => {
    let idx = randomService.randomNine();
    this.setState({ loginSignUp: colors[idx] });
  }
  
  handleLoginSignUpHr = () => {
    let idx = randomService.randomNine();
    this.setState({ loginSignUpHr: colors[idx] });
  }

  handleLoginSignUpTitle = () => {
    let idx = randomService.randomNine();
    this.setState({ loginSignUpTitle: colors[idx] });
  }

  handleNavTitle = () => {
    let idx = randomService.randomNine();
    this.setState({ navTitle: colors[idx] });
  }

  handleNavWelcome = () => {
    let idx = randomService.randomNine();
    this.setState({ navWelcome: colors[idx] });
  }
  
  handleProfileBio = () => {
    let idx = randomService.randomNine();
    this.setState({ profileBio: colors[idx] });
  }

  handleProfileEdit = () => {
    let idx = randomService.randomNine();
    this.setState({ profileEdit: colors[idx] });
  }

  handleProfileEmail = () => {
    let idx = randomService.randomNine();
    this.setState({ profileEmail: colors[idx] });
  }

  handleProfileTitle = () => {
    let idx = randomService.randomNine();
    this.setState({ profileTitle: colors[idx] });
  }

  /*--- Non-Style Handlers ---*/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const user = await userService.getUser();
    this.setState({ user });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={({ history }) =>
            <LoginPage
              history={history}
              loginSignUp={this.state.loginSignUp}
              loginSignUpHr={this.state.loginSignUpHr}
              loginSignUpTitle={this.state.loginSignUpTitle}
              handleLoginSignUp={this.handleLoginSignUp}
              handleLoginSignUpHr={this.handleLoginSignUpHr}
              handleLoginSignUpTitle={this.handleLoginSignUpTitle}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) =>
            <SignUpPage
              history={history}
              loginSignUp={this.state.loginSignUp}
              loginSignUpHr={this.state.loginSignUpHr}
              loginSignUpTitle={this.state.loginSignUpTitle}
              handleLoginSignUp={this.handleLoginSignUp}
              handleLoginSignUpHr={this.handleLoginSignUpHr}
              handleLoginSignUpTitle={this.handleLoginSignUpTitle}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/home' render={() =>
            userService.getUser() ? 
              <HomePage
                homeIcon1={this.state.homeIcon1}
                homeIconStyle1={this.state.homeIconStyle1}
                homeIcon2={this.state.homeIcon2}
                homeIconStyle2={this.state.homeIconStyle2}
                homeIcon3={this.state.homeIcon3}
                homeIconStyle3={this.state.homeIconStyle3}
                homeIcon4={this.state.homeIcon4}
                homeIconStyle4={this.state.homeIconStyle4}
                homeIcon5={this.state.homeIcon5}
                homeIconStyle5={this.state.homeIconStyle5}
                homeProfileHr={this.state.homeProfileHr}
                homeRooms={this.state.homeRooms}
                navTitle={this.state.navTitle}
                navWelcome={this.state.navWelcome}
                user={this.state.user}
                handleHomeIcon1={this.handleHomeIcon1}
                handleHomeIconClick1={this.handleHomeIconClick1}
                handleHomeIcon2={this.handleHomeIcon2}
                handleHomeIconClick2={this.handleHomeIconClick2}
                handleHomeIcon3={this.handleHomeIcon3}
                handleHomeIconClick3={this.handleHomeIconClick3}
                handleHomeIcon4={this.handleHomeIcon4}
                handleHomeIconClick4={this.handleHomeIconClick4}
                handleHomeIcon5={this.handleHomeIcon5}
                handleHomeIconClick5={this.handleHomeIconClick5}
                handleHomeProfileHr={this.handleHomeProfileHr}
                handleHomeRooms={this.handleHomeRooms}
                handleLogout={this.handleLogout}
                handleNavTitle={this.handleNavTitle}
                handleNavWelcome={this.handleNavWelcome}
              />
            :
              <Redirect to='/'/>
          }/>
          <Route exact path='/profile' render={(history) =>
            userService.getUser() ? 
              <ProfilePage
                history={history}
                homeProfileHr={this.state.homeProfileHr}
                navTitle={this.state.navTitle}
                navWelcome={this.state.navWelcome}
                profileBio={this.state.profileBio}
                profileEdit={this.state.profileEdit}
                profileEmail={this.state.profileEmail}
                profileTitle={this.state.profileTitle}
                user={this.state.user}
                handleHomeProfileHr={this.handleHomeProfileHr}
                handleLogout={this.handleLogout}
                handleNavTitle={this.handleNavTitle}
                handleNavWelcome={this.handleNavWelcome}
                handleProfileBio={this.handleProfileBio}
                handleProfileEdit={this.handleProfileEdit}
                handleProfileEmail={this.handleProfileEmail}
                handleProfileTitle={this.handleProfileTitle}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            :
              <Redirect to='/'/>
          }/>
          <Route exact path='/chatroom' render={() =>
            userService.getUser() ? 
              <ChatRoomPage
                navTitle={this.state.navTitle}
                navWelcome={this.state.navWelcome}
                user={this.state.user}
                handleLogout={this.handleLogout}
                handleNavTitle={this.handleNavTitle}
                handleNavWelcome={this.handleNavWelcome}
              />
            :
              <Redirect to='/'/>
          }/>
          <Route exact path='/users' render={() =>
            userService.getAdmin() ? 
              <UsersPage
                navTitle={this.state.navTitle}
                navWelcome={this.state.navWelcome}
                user={this.state.user}
                handleLogout={this.handleLogout}
                handleNavTitle={this.handleNavTitle}
                handleNavWelcome={this.handleNavWelcome}
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
