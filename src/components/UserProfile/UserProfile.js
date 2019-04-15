import React from 'react';
import './UserProfile.css';

const UserProfile = (props) => {

    let profileBio = {
        color: `${props.profileBio}`
    };

    let profileEmail = {
        color: `${props.profileEmail}`
    };

    let profileTitle = {
        color: `${props.profileTitle}`
    };

    return (
      <div className="UserProfile">
        <h2 style={profileTitle} onClick={props.handleProfileTitle}>Here's your profile, {props.user.name}!</h2>
        <img className="UserProfile-avatar" src={props.user.avatar} alt="User Avatar" />
        <h5 style={profileEmail} onClick={props.handleProfileEmail}><span className="UserProfile-email">Email: </span>{props.user.email}</h5>
        <p style={profileBio} onClick={props.handleProfileBio}>{props.user.bio}</p>
      </div>
    );
}

export default UserProfile;
