import React from 'react';
import './UserProfileEdit.css';


const UserProfileEdit = (props) => {

    let editHr = {
        border: `3px solid ${props.homeProfileHr}`
    };

    let editProfile = {
        color: `${props.profileEdit}`
    };

    return (
        <div>
            <hr style={editHr} onClick={props.handleHomeProfileHr} />
            <img src={require("./images/dnd-dice-icon.png")} alt="Dungeon and Dragons Dice" />
            <hr style={editHr} onClick={props.handleHomeProfileHr} />
            <h3 style={editProfile} onClick={props.handleProfileEdit}>Edit Profile:</h3>
            <form onSubmit={props.handleSubmitEdit}>
                <div>
                    <input type="text" placeholder="Name" value={props.name} name="name" onChange={props.handleEdit} />
                </div>
                <div>
                    <input type="text" placeholder="Image URL" value={props.avatar} name="avatar" onChange={props.handleEdit} />
                </div>
                <div>
                    <input type="text" placeholder="Bio" value={props.bio} name="bio" onChange={props.handleEdit} />
                </div>
                <div>
                    <div className="UserProfileEdit-buttons">
                        <br/>
                        <button>Edit</button>
                    </div>
                </div>
            </form>
            <form className="UserProfileEdit-buttons" onSubmit={props.handleSubmitDelete}>
                <button>Delete</button>
            </form>
        </div>
    );
}

export default UserProfileEdit;
