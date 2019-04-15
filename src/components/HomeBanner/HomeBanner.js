import React from 'react';
import './HomeBanner.css';

const HomeBanner = (props) => {

    let bannerHr = {
        border: `3px solid ${props.homeProfileHr}`
    }

    let bannerRooms = {
        color: `${props.homeRooms}`
    }

    return (
        <div className='HomeBanner'>
            <hr style={bannerHr} onClick={props.handleHomeProfileHr} />
            <br/>
            <div className='HomeBanner-icons'>
                <img src={require(`${props.homeIcon1}`)} alt="Icons" onMouseOver={props.handleHomeIcon1} />
                <img src={require(`${props.homeIcon2}`)} alt="Icons" onMouseOver={props.handleHomeIcon2} />
                <img src={require(`${props.homeIcon3}`)} alt="Icons" onMouseOver={props.handleHomeIcon3} />
                <img src={require(`${props.homeIcon4}`)} alt="Icons" onMouseOver={props.handleHomeIcon4} />
                <img src={require(`${props.homeIcon5}`)} alt="Icons" onMouseOver={props.handleHomeIcon5} />
            </div>
            <hr style={bannerHr} onClick={props.handleHomeProfileHr} />
            <h1 style={bannerRooms} onClick={props.handleHomeRooms}>Rooms:</h1>
        </div>
    );
}; 
  
  export default HomeBanner;