import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import NavBar from '../../components/NavBar/NavBar';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
// import NewComponent from '../../components/NewComponent/NewComponent';

const HomePage = (props) => (
    <div className="">
        <NavBar
            user={props.user}
            handleLogout={props.handleLogout}
            />
        <br/>
        <HomeBanner
            homeIcon1={props.homeIcon1}
            homeIcon2={props.homeIcon2}
            homeIcon3={props.homeIcon3}
            homeIcon4={props.homeIcon4}
            homeIcon5={props.homeIcon5}
            handleHomeIcon1={props.handleHomeIcon1}
            handleHomeIcon2={props.handleHomeIcon2}
            handleHomeIcon3={props.handleHomeIcon3}
            handleHomeIcon4={props.handleHomeIcon4}
            handleHomeIcon5={props.handleHomeIcon5}
        />
        <br/><br/><br/>
        {/* <NewComponent /> <<<<<-----Experiment in react hooks, not needed. */}
        <Link to='/chatroom' className='NavBar-link'>Chat Room Test</Link>
    </div>
);

export default HomePage;