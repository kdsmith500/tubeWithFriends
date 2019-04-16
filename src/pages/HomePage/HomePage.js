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
            navTitle={props.navTitle}
            navWelcome={props.navWelcome}
            handleLogout={props.handleLogout}
            handleNavTitle={props.handleNavTitle}
            handleNavWelcome={props.handleNavWelcome}
            />
        <br/>
        <HomeBanner
            homeIcon1={props.homeIcon1}
            homeIconStyle1={props.homeIconStyle1}
            homeIcon2={props.homeIcon2}
            homeIconStyle2={props.homeIconStyle2}
            homeIcon3={props.homeIcon3}
            homeIconStyle3={props.homeIconStyle3}
            homeIcon4={props.homeIcon4}
            homeIconStyle4={props.homeIconStyle4}
            homeIcon5={props.homeIcon5}
            homeIconStyle5={props.homeIconStyle5}
            homeProfileHr={props.homeProfileHr}
            homeRooms={props.homeRooms}
            handleHomeIcon1={props.handleHomeIcon1}
            handleHomeIconClick1={props.handleHomeIconClick1}
            handleHomeIcon2={props.handleHomeIcon2}
            handleHomeIconClick2={props.handleHomeIconClick2}
            handleHomeIcon3={props.handleHomeIcon3}
            handleHomeIconClick3={props.handleHomeIconClick3}
            handleHomeIcon4={props.handleHomeIcon4}
            handleHomeIconClick4={props.handleHomeIconClick4}
            handleHomeIcon5={props.handleHomeIcon5}
            handleHomeIconClick5={props.handleHomeIconClick5}
            handleHomeProfileHr={props.handleHomeProfileHr}
            handleHomeRooms={props.handleHomeRooms}
        />
        <br/><br/><br/>
        {/* <NewComponent /> <<<<<-----Experiment in react hooks, not needed. */}
        <Link to='/chatroom' className='NavBar-link'>Chat Room Test</Link>
    </div>
);

export default HomePage;