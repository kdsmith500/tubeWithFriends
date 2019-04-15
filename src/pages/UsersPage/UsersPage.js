import React, { Component } from 'react';
import './UsersPage.css';
import NavBar from '../../components/NavBar/NavBar';
import Users from '../../components/Users/Users';
import userService from '../../utils/userService';

class UsersPage extends Component {
    state = {
        users: []
    };
    
    // handleUsers = () => {
    //     const users = userService.index();
    //     this.setState({ users });
    // } 

    // handleUsersIndex = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // }

    // handleUsersIndexGet = async (e) => {
    //     // e.preventDefault();
    //     try {
    //         // const users = 
    //         await userService.index().then(this.handleUsersIndex());
    //         // .then(this.setState({ users: users }));
    //     } catch (err) {
    //         // this.props.updateMessage(err.message);
    //     }
    // };

    async componentDidMount() {
        const users = await userService.index();
        this.setState({ users });
    }

    render() {
        // console.log(this.props.users);
        console.log(`user page, ${this.state.users}`);
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
                <Users
                    users={this.state.users}
                />
            </div>
        );
    }
}

export default UsersPage;