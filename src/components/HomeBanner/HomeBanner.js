import React from 'react';
import './HomeBanner.css';

const HomeBanner = (props) => {

    return (
        <div className='HomeBanner'>
            <hr/>
            <div className='HomeBanner-icons'>
                <img src={require(`${props.homeIcon1}`)} alt="Icons" onMouseOver={props.handleHomeIcon1} />
                <img src={require(`${props.homeIcon2}`)} alt="Icons" onMouseOver={props.handleHomeIcon2} />
                <img src={require(`${props.homeIcon3}`)} alt="Icons" onMouseOver={props.handleHomeIcon3} />
                <img src={require(`${props.homeIcon4}`)} alt="Icons" onMouseOver={props.handleHomeIcon4} />
                <img src={require(`${props.homeIcon5}`)} alt="Icons" onMouseOver={props.handleHomeIcon5} />
            </div>
            <hr/>
            <h1>Rooms:</h1>
        </div>
    );
}; 
  
  export default HomeBanner;