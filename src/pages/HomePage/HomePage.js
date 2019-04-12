import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import NavBar from '../../components/NavBar/NavBar';
import HomeBanner from '../../components/HomeBanner/HomeBanner';

const HomePage = (props) => (
    <div className="">
        <NavBar
            user={props.user}
            handleLogout={props.handleLogout}
            />
        <br/>
        <HomeBanner
            icon1={props.icon1}
            icon2={props.icon2}
            icon3={props.icon3}
            icon4={props.icon4}
            icon5={props.icon5}
            handleIcon1={props.handleIcon1}
            handleIcon2={props.handleIcon2}
            handleIcon3={props.handleIcon3}
            handleIcon4={props.handleIcon4}
            handleIcon5={props.handleIcon5}
        />
        <br/><br/><br/>
        <Link to='/chatroom' className='NavBar-link'>Chat Room Test</Link>
    </div>
);

export default HomePage;