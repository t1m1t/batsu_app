import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Container extends Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:'',
            p_number:''
        }
    }
    openNav(){
        $("#sideMenuId").css("width","250px");
    }
    closeNav(){
        $('#sideMenuId').css("width", "0px");
    }
    render() {
        return (
            <div className="col-4">
                <span className="spanFont" onClick={this.openNav}>&#9776;</span>
                <div id="sideMenuId" className="sideMenuClass">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    {/*<Link to="/">Home</Link>*/}
                    {/*<Link to="/profile">Profile</Link>*/}
                    {/*<Link to="/events">Events</Link>*/}
                    {/*<Link to="/contact">Contact Us</Link>*/}
                </div>
            </div>
        )
    }
}

export default Container;

