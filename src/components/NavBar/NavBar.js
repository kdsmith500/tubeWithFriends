import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user.admin ?
    <div>
      <br/>
      <span className='NavBar-title'>tubeWithFriends</span>
      &nbsp;|&nbsp;
      <Link to='/home' className='NavBar-link'>Home</Link>
      &nbsp;|&nbsp;
      <Link to='/profile' className='NavBar-link'>Profile</Link>
      &nbsp;|&nbsp;
      <Link to='/users' className='NavBar-link'>Users</Link>
      &nbsp;|&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
      &nbsp;|&nbsp;
      <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
    </div>
    :
    <div>
      <br/>
      <span className='NavBar-title'>tubeWithFriends</span>
      &nbsp;|&nbsp;
      <Link to='/home' className='NavBar-link'>Home</Link>
      &nbsp;|&nbsp;
      <Link to='/profile' className='NavBar-link'>Profile</Link>
      &nbsp;|&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
      &nbsp;|&nbsp;
      <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
    </div>;
  
  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;