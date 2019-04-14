import React from 'react';
import './UserProfile.css';

const UserProfile = (props) => {
    return (
      <div className="UserProfile">
        <h2>Here's your profile, {props.user.name}!</h2>
        <img className="UserProfile-avatar" src={props.user.avatar} alt="Avatar Image" />
        <h5><span className="UserProfile-email">Email: </span>{props.user.email}</h5>
        <p>{props.user.bio}</p>
      </div>
    );
}

export default UserProfile;
