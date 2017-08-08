import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';
import Home from './home';
import Sign_Up from './sign_up';
import Events from './events';
import './app.css';
 

class NavBar extends Component {
    showSettings(event){
        event.preventDefault();
    }

    render() {
        return(
            <Menu className="bm-menu">
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="profile" className="menu-item" href="/profile">Profile</a>
                <a id="events" className="menu-item" href="/events">Create Event</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="logoff" className="menu-item" href="/">Log Off</a>
            </Menu>
        );
    }
}

export default NavBar;