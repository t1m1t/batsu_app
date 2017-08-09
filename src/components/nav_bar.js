import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import './app.css';
// import {Link} from 'react-router-dom';

class NavBar extends Component {
    showSettings(event){
        event.preventDefault();
    }

    render() {
        return(
            <Menu className="bm-menu">
                <a className="menu-item" href="/">Home</a>
                <a className="menu-item" href="/profile">Profile</a>
                <a className="menu-item" href="/map">Map</a>
                <a className="menu-item" href="/about">About</a>
                <a className="menu-item" href="/">Log Off</a>
                <a className="menu-item" href="/after_event_creation">AfterEventCreation</a>
            </Menu>
        );
    }
}

export default NavBar;