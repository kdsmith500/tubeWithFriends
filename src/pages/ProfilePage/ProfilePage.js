import React, { Component } from 'react';
import './ProfilePage.css';
import NavBar from '../../components/NavBar/NavBar';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserProfileEdit from '../../components/UserProfileEdit/UserProfileEdit';
import userService from '../../utils/userService'

// const ProfilePage = (props) => (
class ProfilePage extends Component {
    state = {
        name: '',
        avatar: '',
        bio: ''
    };

    handleEdit = (e) => {
        // this.props.updateMessage('');
        this.setState({
            // Using ES2015 Computed Property Names
            [e.target.name]: e.target.value
        });
    }
    
    handleSubmitEdit = async (e) => {
        e.preventDefault();
        try {
            await userService.edit(this.state).then(this.props.handleSignupOrLogin);
            // this.props.history.push('/profile');
        } catch (err) {
            // Invalid user data (probably duplicate email)
            // this.props.updateMessage(err.message);
        }
    }

    handleSubmitDelete = async (e) => {
        e.preventDefault();
        try {
            await userService.remove().then(this.props.handleLogout());
        } catch (err) {
            // Invalid user data (probably duplicate email)
            // this.props.updateMessage(err.message);
        }
    }

    render() {
        return (
            <div className="">
                <NavBar
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <br/>
                <UserProfile
                    user={this.props.user}
                    handleUpdateUserProfile={this.handleUpdateUserProfile}
                    />
                <br/>
                <UserProfileEdit
                    userEdit={this.state.user}
                    user={this.props.user}
                    handleEdit={this.handleEdit}
                    handleSubmitEdit={this.handleSubmitEdit}
                    handleSubmitDelete={this.handleSubmitDelete}
                />
            </div>
        );
    }
};

export default ProfilePage;