import React from 'react';
import './Users.css';

const Users = (props) => {
    console.log(`user component, ${props.users}`)
    return (
        <div>
            {/* <h3>{props.user.name}</h3>
            <img src={props.user.avatar} alt="User Avatar" />
            <div>
                <h5><span>Email: </span>{props.user.email}</h5>
                <p>{props.user.bio}</p>
            </div> */}
            USER COMPONENT
        </div>
    );
}

export default Users;