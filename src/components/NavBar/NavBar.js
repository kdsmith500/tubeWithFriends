import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <div className='NavBar'>
        <div>
        <Link to='/home' className='NavBar-link'>Home</Link>
        &nbsp;|&nbsp;
        <Link to='/profile' className='NavBar-link'>Profile</Link>
        &nbsp;|&nbsp;
        <Link to='/users' className='NavBar-link'>Users</Link>
        &nbsp;|&nbsp;
        <Link to='/chatroom' className='NavBar-link'>Chat Room Test</Link>
        &nbsp;|&nbsp;
        <Link to='/' className='NavBar-link'>Login Test</Link>
        &nbsp;|&nbsp;
        <Link to='/signup' className='NavBar-link'>Sign-Up Test</Link>
        </div>
    </div>
  );
};

export default NavBar;