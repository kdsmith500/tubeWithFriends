import React from 'react';
import './UsersPage.css';
import NavBar from '../../components/NavBar/NavBar';

const UsersPage = (props) => (
    <div className="">
        <NavBar
            user={props.user}
            handleLogout={props.handleLogout}
        />
        <br/>
        ADMIN'S EYES ONLY: Users Page
    </div>
);

export default UsersPage;