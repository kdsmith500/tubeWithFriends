import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/home');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  render() {
    let hrStyle = {
      border: `3px solid ${this.props.loginSignUpHr}`
    };
    
    let loginStyle = {
      color: `${this.props.loginSignUp}`
    }
    
    let titleStyle = {
      color: `${this.props.loginSignUpTitle}`
    };

    return (
      <div className="LoginPage">
        <header>
          <br/>
          <h1 style={titleStyle} onClick={this.props.handleLoginSignUpTitle}>tubeWithFriends</h1>
          <br/>
          <hr style={hrStyle} onClick={this.props.handleLoginSignUpHr} />
          <br/>
        </header>
        <h3 style={loginStyle} onClick={this.props.handleLoginSignUp}>Log In</h3>
        <form onSubmit={this.handleSubmit} >
          <div>
            <div>
              <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <input type="password" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <br/>
              <button>Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/signup'>Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginPage;