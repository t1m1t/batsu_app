import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import './app.css';
import { signup } from '../actions';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';


class Sign_Up extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                fname: 'test',
                lname: 'user',
                phone: '7142323333',
                email: 'kelsey@gmail.com',
                password: 'passW0rdhaHAA',
                password_conf: 'passW0rdhaHAA',
                dob: ''
            }
        }
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log('Called handleFormSubmit', this.state.form);
        const newState = {
            form: {
                fname: '',
                lname: '',
                phone: '',
                email: '',
                password: '',
                password_conf: '',
                dob: ''
            }
        }
        this.setState(newState);
        this.handleAxios();
    }

    handleAxios(){
        const {form} = this.state;
        console.log(form);
        axios.post(`http://localhost/Website/accountability_db/c5.17_accountability/form.php?operation=insertUser`, form).then((resp) => {
            console.log('this is the response from insert:', resp);
            document.cookie = resp.data.sesh_id;
        })
    }

    handleChange(event){
        const {name, value} = event.target;
        const {form} = this.state;
        form[name] = value;
        this.setState({form: {...form}});
    }

    handleSignup(vals){
        console.log('Form values:', vals);
        this.props.signup(vals);
    }

    render() {
        const {fname, lname, phone, email, password, password_conf, dob} = this.state.form;
        const {handleSignup, signupError} = this.props;
        return (
            <div className="signup-page">
                <h1 className="batsu-title-signup">Sign-Up</h1>
                <form onSubmit={(event) => {this.handleFormSubmit(event); handleSubmit(vals => this.handleSignIn(vals))}}>
                    <div>
                        <h6 className="signin-subtitles">First Name</h6>
                        <input className="signup_info" name="fname" value={fname} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div>
                        <h6 className="signin-subtitles">Last Name</h6>
                        <input className="signup_info" name="lname" value={lname} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div>
                        <h6 className="signin-subtitles">Phone Number</h6>
                        <input className="signup_info" name="phone" type="number" value={phone} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div>
                        <h6 className="signin-subtitles">E-mail Address</h6>
                        <input className="signup_info" name="email" value={email} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div>
                        <h6 className="signin-subtitles">Password</h6>
                        <input className="signup_info" name="password" type="password" value={password} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div>
                        <h6 className="signin-subtitles">Re-enter Password</h6>
                        <input className="signup_info" name="password_conf" type="password" value={password_conf} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div>
                        <h6 className="signin-subtitles">Date of Birth</h6>
                        <input className="signup_info" name="dob" type="date" value={dob} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <p className="text-danger">{signupError}</p>
                    <Link to="/" className="signup-button">Back</Link>
                    <button className="submit-signup-button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

function validate(vals){
    const error = {};

    if (!vals.fname){
        error.fname = "Please enter a first name";
    }
    if (!vals.lname){
        error.lname = "Please enter a last name";
    }
    if (!vals.phone){
        error.phone = "Please enter a phone number";
    }
    if (!vals.email){
        error.email = "Please enter an e-mail";
    }
    if (!vals.password){
        error.password = "Please enter a password";
    }
    if (vals.password !== vals.confirmPassword){
        error.confirmPassword = "Passwords must match";
    }
    if (!vals.dob){
        error.dob = "Please enter a date of birth";
    }
    
    return error;
}

SignUp = reduxForm({
    form: 'signup',
    validate
})(SignUp);

function mapStateToProps(state){
    return{
        signupError: state.auth.error
    }
}

export default connect(mapStateToProps, {signup})(Sign_Up);