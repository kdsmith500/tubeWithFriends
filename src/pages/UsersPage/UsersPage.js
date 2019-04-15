import React, { Component } from 'react';
import './UsersPage.css';
import NavBar from '../../components/NavBar/NavBar';
import Users from '../../components/Users/Users';
import userService from '../../utils/userService';

class UsersPage extends Component {
    state = {
        users: [],
    };

    async componentDidMount() {
        const users = await userService.index();
        this.setState({ users });
    }

    render() {  
        return (
            <div className="UsersPage" onLoad={this.props.handleUsers}>
                <NavBar
                    user={this.props.user}
                    navTitle={this.props.navTitle}
                    navWelcome={this.props.navWelcome}
                    handleLogout={this.props.handleLogout}
                    handleNavTitle={this.props.handleNavTitle}
                    handleNavWelcome={this.props.handleNavWelcome}
                />
                <br/>
                {this.state.users.map((user, idx) => (
                    <Users
                        key={idx}
                        user={user}
                    />   
                ))}
            </div>
        );
    }
}

export default UsersPage;