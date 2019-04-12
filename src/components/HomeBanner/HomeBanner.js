import React from 'react';
import './HomeBanner.css';

const HomeBanner = (props) => {

    return (
        <div className='HomeBanner'>
            <hr/>
            <div className='HomeBanner-icons'>
                <img src={require(`${props.icon1}`)} alt="Computer Icon" onMouseOver={props.handleIcon1} />
                <img src={require(`${props.icon2}`)} alt="Boombox Icon" onMouseOver={props.handleIcon2} />
                <img src={require(`${props.icon3}`)} alt="Television Icon" onMouseOver={props.handleIcon3} />
                <img src={require(`${props.icon4}`)} alt="Laptop Icon" onMouseOver={props.handleIcon4} />
                <img src={require(`${props.icon5}`)} alt="Tablet Icon" onMouseOver={props.handleIcon5} />
            </div>
            <hr/>
            <h1>Rooms:</h1>
        </div>
    );
}; 
  
  export default HomeBanner;