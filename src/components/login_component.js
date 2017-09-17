import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import SignUp from './sign_up.js';
import { renderInput } from './helper_functions';
import { connect } from 'react-redux';
import { signin } from '../actions/index';
import './app.css';


class SignIn extends Component {
    handleSignIn(vals){
        // const history = new createBrowserHistory();
        // console.log("Sign In vals:", vals);
        this.props.signin(vals);
    }

    componentWillReceiveProps(nextProps){
        // console.log('The props are:', nextProps);

        //const history = new createBrowserHistory();
        if(nextProps.auth){
            this.props.history.push('/home');
        }
    }

    render(){
        const {handleSubmit, signinError} = this.props;
        return(
            <div className="login_page">
                <form onSubmit={handleSubmit(vals => this.handleSignIn(vals))}> 
                    <h6 className="login-subtitles">E-mail</h6>
                    <Field name="email" type="email" component={renderInput} />
                    <h6 className="login-subtitles">Password</h6>
                    <Field name="password" type="password" component={renderInput} />
                    
                     <p className="text-danger">{signinError}</p> 
                    <button type="submit" className="login-button" >Log In</button>
                </form>
                <div className="signup-top-div">
                    <button className="signup-button">
                        <Link to="/sign_up">Sign Up</Link>
                    </button>
                    {/*<Route path="/signup_page" component={SignupPage} />*/}
                </div>
            </div>
        )
    }
}

function validate(vals){
    const error = {};

    if (!vals.email){
        error.email = "Please enter an e-mail";
    }
    if (!vals.password){
        error.password = "Please enter a password";
    }
    return error;
}

SignIn = reduxForm({
    form: 'signin',
    validate
})(SignIn);

function mapStateToProps(state){
    return{
        signinError: state.auth.error,
        auth: state.auth.authorized
    }
}

export default connect(mapStateToProps, {signin})(SignIn);
