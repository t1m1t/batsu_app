import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
 
class BurgerMenu extends Component {
  
 
render () {
    return (
    <Menu>
        <NavLink className="menu-item" to="/">Home</NavLink>
        <NavLink className="menu-item" to="/about">Profile</NavLink>
        <NavLink className="menu-item" to="/contact">Map</NavLink>
        <NavLink className="menu-item" to="/contact">About</NavLink>
        <NavLink onClick={ this.showSettings } className="menu-item" to="">About</NavLink>
    </Menu>
    );
  }
}


// export default props => (
//     <div className="nav_container">

//     <ul className="nav my-3">
//         <li className="nav-item">
//             <NavLink to="/" exact className="nav-link">Home</NavLink>
//         </li>
//          <li className="nav-item">
//             <NavLink to="/" className="nav-link">Profile</NavLink>
//         </li>
//         <li className="nav-item">
//             <NavLink to="/log_off" className="nav-link">Log-off</NavLink>
//         </li>
//     </ul> 
// )