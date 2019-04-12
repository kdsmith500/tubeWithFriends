import React from 'react';
import './ProfilePage.css';
import NavBar from '../../components/NavBar/NavBar';

const ProfilePage = (props) => (
    <div className="">
        <NavBar
            user={props.user}
            handleLogout={props.handleLogout}
        />
        <br/>
        Profile Page
    </div>
);

export default ProfilePage;