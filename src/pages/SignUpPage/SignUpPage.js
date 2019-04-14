import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './SignUpPage.css';


class SignUpPage extends Component {
    state = {
        // message: '',
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    };

    handleChange = (e) => {
        // this.props.updateMessage('');
        this.setState({
            // Using ES2015 Computed Property Names
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await userService.signup(this.state);
        // Let <App> know a user has signed up!
        this.props.handleSignupOrLogin();
        // Successfully signed up - show GamePage
        this.props.history.push('/home');
    } catch (err) {
        // Invalid user data (probably duplicate email)
        // this.props.updateMessage(err.message);
    }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }

    // updateMessage = (msg) => {
    //     this.setState({message: msg});
    // }

    render() {
        return (
        <div className='SignupPage'>
            <header>
                <br/>
                <h1>tubeWithFriends</h1>
                <br/><hr/><br/>
            </header>
            <h3 className="">Sign Up</h3>
            <form className="" onSubmit={this.handleSubmit} >
                <div className="">
                    <div className="">
                        <input type="text" className="" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <input type="email" className="" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <input type="password" className="" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <input type="password" className="" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <br/>
                        <button className="" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                        <Link to='/'>Cancel</Link>
                    </div>
                </div>
            </form>
            {/* <p>{this.state.message}</p> */}
        </div>
        );
    }
};

export default SignUpPage;