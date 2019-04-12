import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import NavBar from '../../components/NavBar/NavBar';

const HomePage = (props) => (
    <div className="">
        <NavBar
            user={props.user}
            handleLogout={props.handleLogout}
        />
        <br/>
        Home Page
        <br/><br/><br/>
        <Link to='/chatroom' className='NavBar-link'>Chat Room Test</Link>
    </div>
);

export default HomePage;