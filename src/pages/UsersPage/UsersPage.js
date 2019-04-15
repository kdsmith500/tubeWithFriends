import React from 'react';
import './UsersPage.css';
import NavBar from '../../components/NavBar/NavBar';

const UsersPage = (props) => (
    <div className="UsersPage">
        <NavBar
            user={props.user}
            navTitle={props.navTitle}
            navWelcome={props.navWelcome}
            handleLogout={props.handleLogout}
            handleNavTitle={props.handleNavTitle}
            handleNavWelcome={props.handleNavWelcome}
        />
        <br/>
        ADMIN'S EYES ONLY: Users Page
    </div>
);

export default UsersPage;