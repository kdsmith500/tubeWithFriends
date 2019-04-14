import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfileEdit.css';

const UserProfileEdit = (props) => {
    return (
        <div>
            <hr/>
            <img src={require("./images/dnd-dice-icon.png")} alt="Dungeon and Dragons Dice" />
            <hr/>
            <h3 className="">Edit Profile:</h3>
            <form className="" onSubmit={props.handleSubmitEdit}>
                <div className="">
                    <div className="">
                        <input type="text" className="" placeholder="Name" value={props.name} name="name" onChange={props.handleEdit} />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <input type="text" className="" placeholder="Image URL" value={props.avatar} name="avatar" onChange={props.handleEdit} />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <input type="text" className="" placeholder="Bio" value={props.bio} name="bio" onChange={props.handleEdit} />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <br/>
                        <button className="">Edit</button>&nbsp;&nbsp;
                        <Link to='/'>Delete</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserProfileEdit;
