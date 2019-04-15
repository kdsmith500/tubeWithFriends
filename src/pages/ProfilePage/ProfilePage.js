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
                    navTitle={this.props.navTitle}
                    navWelcome={this.props.navWelcome}
                    handleLogout={this.props.handleLogout}
                    handleNavTitle={this.props.handleNavTitle}
                    handleNavWelcome={this.props.handleNavWelcome}
                />
                <br/>
                <UserProfile
                    profileBio={this.props.profileBio}
                    profileEmail={this.props.profileEmail}
                    profileTitle={this.props.profileTitle}
                    user={this.props.user}
                    handleProfileBio={this.props.handleProfileBio}
                    handleProfileEmail={this.props.handleProfileEmail}
                    handleProfileTitle={this.props.handleProfileTitle}
                    />
                <br/>
                <UserProfileEdit
                    userEdit={this.state.user}
                    homeProfileHr={this.props.homeProfileHr}
                    profileEdit={this.props.profileEdit}
                    user={this.props.user}
                    handleEdit={this.handleEdit}
                    handleHomeProfileHr={this.props.handleHomeProfileHr}
                    handleProfileEdit={this.props.handleProfileEdit}
                    handleSubmitEdit={this.handleSubmitEdit}
                    handleSubmitDelete={this.handleSubmitDelete}
                    handleSignupOrLogin={this.handleSignupOrLogin}
                />
            </div>
        );
    }
};

export default ProfilePage;