import React, { Component } from 'react';
import './Users.css';
import userService from '../../utils/userService'

class Users extends Component {
    state = {
        email: null
    };

    handleSubmitDeleteUser = async (e) => {
        e.preventDefault();
        try {
            await userService.removeUser(this.state.email)
            .then(window.location.reload());
        } catch (err) {
        }
    }

    async componentDidMount() {
        this.setState({ email: this.props.user.email });
    }

    render () {
        return (
            <div className="Users">
                <h3>{this.props.user.name}</h3>
                <div><hr className="Users-hr" /></div>
                <div className="Users-avatar-bio">
                    <img src={this.props.user.avatar} alt="User Avatar" width={'200px'} height={'auto'} />
                    <p>{this.props.user.bio}</p>
                </div>
                <div><hr/></div>
                <div className="Users-email-button">
                    <h5><span>Email: </span>{this.props.user.email}</h5>
                    <form onSubmit={this.handleSubmitDeleteUser}>
                        <button>Delete</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Users;