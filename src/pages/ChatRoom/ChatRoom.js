import React from 'react';
import './ChatRoom.css';
import NavBar from '../../components/NavBar/NavBar';

const ChatRoom = (props) => (
    <div className="">
        <NavBar
            user={props.user}
            handleLogout={props.handleLogout}
        />
        Chat Room
    </div>
);

export default ChatRoom;