import React, {Component} from 'react';
import './app.css';
import axios from 'axios';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signin } from '../actions';


class LogInForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
    }

    handleFormSubmit(event){
        event.preventDefault();
        console.log('Called handleFormSubmit', this.state.form);
        const newState = {
            form: {
                email: '',
                password: ''
            }
        }
        this.setState(newState);
        this.handleAxios();
    }

    handleChange(event){
        const { name, value } = event.target;
        const { form } = this.state;
        form[name] = value;
        this.setState({form: {...form}});
    }

    handleAxios(){
        const {form} = this.state;
        axios.post(`http://localhost:8888/form.php?operation=insertUser`, form).then((resp) => {
            console.log('this is the response: ', resp);
        })
    }

    render(){
        const {email, password} = this.state.form;
        const {handleSubmit, signinError} = this.props
        return(
            <div className="login_page">
                <form onSubmit={(event) => {this.handleFormSubmit(event); handleSubmit(vals => this.handleSignIn(vals))}}>
                    <h6 className="login-subtitles">E-mail</h6>
                    <input name="email" type="email" value={email} onChange={ (event) => this.handleChange(event) } />
                    <h6 className="login-subtitles">Password</h6>
                    <input name="password" type="password" value={password} onChange={ (event) => this.handleChange(event) } />
                    <p className="text-danger">{signinError}</p>
                    <button type="submit" className="login-button">Log In</button>
                </form>
            </div>
        )
    }
}

LogInForm = reduxForm({
    form: 'signin'
})(LogInForm)

function mapStateToProps(state){
    return{
        signinError: state.auth.error,
        auth: state.auth.authorized
    }
}

export default connect(mapStateToProps, {signin})(LogInForm);
