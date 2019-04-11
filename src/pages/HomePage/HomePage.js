import React from 'react';
import './HomePage.css';
import NavBar from '../../components/NavBar/NavBar';

const HomePage = (props) => (
    <div className="">
        <NavBar
            user={props.user}
            handleLogout={props.handleLogout}
        />
        Home Page
    </div>
);

export default HomePage;