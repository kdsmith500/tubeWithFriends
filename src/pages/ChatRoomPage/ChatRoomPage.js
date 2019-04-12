import React from 'react';
import './ChatRoomPage.css';
import NavBar from '../../components/NavBar/NavBar';
import ChatRoom from '../../components/ChatRoom/ChatRoom';

const ChatRoomPage = (props) => (
    <div className="ChatRoomPage">
        <NavBar
            user={props.user}
            handleLogout={props.handleLogout}
        />
        <br/>
        <ChatRoom />
    </div>
);

export default ChatRoomPage;