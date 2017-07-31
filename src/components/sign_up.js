import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './app.css';


class Sign_Up extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_conf: '',
                date_of_birth: ''
            }
        }
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log('Called handleFormSubmit', this.state.form);
        const newState = {
            form: {
                first_name: '',
                last_name: '',
                tel: '',
                email: '',
                password: '',
                password_conf: '',
                date_of_birth: ''
            }
        }
        this.setState(newState);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {form} = this.state;
        form[name] = value;
        this.setState({form: {...form}});
    }

    render() {
        const {first_name, last_name, tel, email, password, password_conf, date_of_birth} = this.state.form;
        return (
            <div className="signup-page">
                <h1 className="batsu-title-signup">_Batsu</h1>
                <form onSubmit={(event) => {
                    this.handleFormSubmit(event)
                }}>
                    <div>
                        <h6 className="signin-subtitles">First Name</h6>
                        <input name="first_name" value={first_name} onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div>
                        <h6 className="signin-subtitles">Last Name</h6>
                        <input name="last_name" value={last_name} onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div>
                        <h6 className="signin-subtitles">Phone Number</h6>
                        <input name="tel" type="number" value={tel} onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div>
                        <h6 className="signin-subtitles">E-mail Address</h6>
                        <input name="email" value={email} onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div>
                        <h6 className="signin-subtitles">Password</h6>
                        <input name="password" type="password" value={password} onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div>
                        <h6 className="signin-subtitles">Re-enter Password</h6>
                        <input name="password_conf" type="password" value={password_conf} onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div>
                        <h6 className="signin-subtitles">Date of Birth</h6>
                        <input name="date_of_birth" value={date_of_birth} onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <button className="submit-signup-button">Submit</button>
                </form>
                <h4 className="login_trouble-signup">Having Trouble Logging In?</h4>
                <div className="title_bottom_links-signup">
                    <Link className="title_routes" to="/">Contact</Link>
                    <Link className="title_routes" to="/">Legal</Link>
                    <Link className="title_routes" to="/">Privacy</Link>
                </div>
            </div>
        )
    }
}

export default Sign_Up;