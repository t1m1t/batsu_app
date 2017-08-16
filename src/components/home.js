import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SignIn from './title_input';
import SignUp from './sign_up.js';
import Event from './events';
import './app.css';


const Home = () => {
    return (
        
        <div className="batsu-app">
            <h1 className="batsu-title">_Batsu</h1>
            <div>
                <SignIn />
                <div className="signup-top-div">
                    <button className="signup-button">
                        <Link to="/sign_up">Sign Up</Link>                       
                    </button>
                    <Route path="/sign_up" component={SignUp} />
                </div>
                <div className="line_space"></div>
                <div className="fb-login-button" data-button-type="login_with" data-size="large" scope="public_profile,email" data-onlogin="checkLoginState();"></div>
            </div>
        </div>
    )
}

export default Home;
