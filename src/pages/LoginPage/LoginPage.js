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
    return (
      <div className="LoginPage">
        <header>
          <br/>
          <h1>tubeWithFriends</h1>
          <br/><hr/><br/>
        </header>
        <h3 className="">Log In</h3>
        <form className="" onSubmit={this.handleSubmit} >
          <div className="">
            <div className="">
              <input type="email" className="" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="">
            <div className="">
              <input type="password" className="" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div className="">
            <div className="">
              <br/>
              <button className="">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/signup'>Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginPage;