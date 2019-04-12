import React from 'react';
import './HomeBanner.css';

const HomeBanner = (props) => {

    return (
        <div className='HomeBanner'>
            <hr/>
            <div className='HomeBanner-icons'>
                <img src={require(`${props.homeIcon1}`)} alt="Computer Icon" onMouseOver={props.handleHomeIcon1} />
                <img src={require(`${props.homeIcon2}`)} alt="Boombox Icon" onMouseOver={props.handleHomeIcon2} />
                <img src={require(`${props.homeIcon3}`)} alt="Television Icon" onMouseOver={props.handleHomeIcon3} />
                <img src={require(`${props.homeIcon4}`)} alt="Laptop Icon" onMouseOver={props.handleHomeIcon4} />
                <img src={require(`${props.homeIcon5}`)} alt="Tablet Icon" onMouseOver={props.handleHomeIcon5} />
            </div>
            <hr/>
            <h1>Rooms:</h1>
        </div>
    );
}; 
  
  export default HomeBanner;