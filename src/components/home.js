import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LogInForm from './title_input';
import Sign_Up from "./sign_up";
import './app.css';


const Home = () => (
    <div className="batsu-app">
        <h1 className="batsu-title">_Batsu</h1>
        <LogInForm/>
        <div>
            <div className="signup-top-div">
                <button className="signup-button">
                    <Link to="/sign_up">Sign Up</Link>
                </button>
                <Route path="/sign_up" component={Sign_Up} />
            </div>
            <div className="line_space"></div>
        </div>
    </div>
);

export default Home;
