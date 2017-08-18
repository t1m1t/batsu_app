import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import SignUp from './sign_up.js';
import { renderInput } from './helper_functions';
import { connect } from 'react-redux';
import { signin } from '../actions/index';
import './app.css';
// import withRouter;
// import {Router} from 'react-router'
// import {createBrowserHistory} from 'history';

class SignIn extends Component {



    // constructor(props){
    //     super(props);
    //     this.state = {
    //         form: {
    //             email: '',
    //             password: ''
    //         }
    //     }
    // }

    // handleFormSubmit(event){
    //     event.preventDefault();
    //     console.log('Called handleFormSubmit', this.state.form);
    //     const newState = {
    //         form: {
    //             email: '',
    //             password: ''
    //         }
    //     }
    //     this.setState(newState);
    //     this.handleAxios();
    // }

    // handleChange(event){
    //     const { name, value } = event.target;
    //     const { form } = this.state;
    //     form[name] = value;
    //     this.setState({form: {...form}});
    // }

    // handleAxios(){
    //     const {form} = this.state;
    //     axios.post(`http://localhost/form.php?operation=insertUser`, form).then((resp) => {
    //         console.log('this is the response: ', resp);
    //     })
    // }

    handleSignIn(vals){
        // const history = new createBrowserHistory();
        console.log("Sign In vals:", vals);
        this.props.signin(vals);
    }


    componentWillReceiveProps(nextProps){
        console.log('The props are:', nextProps);

        //const history = new createBrowserHistory();
        if(nextProps.auth){
            this.props.history.push('/map');
        }
    }

// <<<<<<< HEAD
//     handleAxios(){
//         const {form} = this.state;
//         console.log(form);
//         axios.post(`http://localhost/Website/accountability_db/c5.17_accountability/form.php?operation=signin`, form).then((resp) => {
//             console.log('this is the response: ', resp);
//             if(resp.data.success === true){
//                 var now = new Date();
//                 var time = now.getTime();
//                 var expireTime = time + 86400000;   //24 hours
//                 now.setTime(expireTime);
//                 document.cookie = "token="+resp.data.token+";expires="+now.toUTCString()+";path=/";
//                 //go to home page
//             }
//             else{
//                 //stay on log in page
//             }
//         })
// =======
//     componentWillReceiveProps(nextProps){
//         if(nextProps.auth){
//             this.props.history.push('/map');
//         }
// >>>>>>> af273fb79a40b3dbde12efac33aeaf84be587f75
//     }

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
                    <button type="submit" className="login-button">Log In</button>
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
