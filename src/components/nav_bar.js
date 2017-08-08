import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom';
import Home from './home';
import Sign_Up from './sign_up';
import Events from './events';
 

const NavBar = props=> {
    return(
        <ul className="nav my-3">
            <li className="nav-item">
                <NavLink className="menu-item" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="menu-item" to="/profile">Profile</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="menu-item" to="/events">Create Event</NavLink>
            </li>
            <li className="nav-item">   
                <NavLink className="menu-item" to="/about">About</NavLink>
            </li>
            <li className="nav-item">  
                <NavLink className="menu-item" to="/">Log Off</NavLink>
            </li>
        </ul>
    );
}

export default NavBar;