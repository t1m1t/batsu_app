import React, {Component} from 'react';
import './app.css';


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
    }

    handleChange(event){
        const { name, value } = event.target;
        const { form } = this.state;
        form[name] = value;
        this.setState({form: {...form}});
    }

    render(){
        const {email, password} = this.state.form;
        return(
            <div className="login_page">
                <form onSubmit={ (event) => {this.handleFormSubmit(event)} }>
                    <div>
                        <h6 className="login-subtitles">E-mail</h6>
                        <input name="email" value={email} onChange={ (event) => this.handleChange(event) } />
                    </div>
                    <div>
                        <h6 className="login-subtitles">Password</h6>
                        <input name="password" value={password} onChange={ (event) => this.handleChange(event) } />
                    </div>
                    <button className="login-button">Log In</button>
                    {/*/!*<div className="signup-top-div">*!/*/}
                        {/*<button className="signup-button">*/}
                            {/*<Link to="/sign_up">Sign Up</Link>*/}
                        {/*</button>*/}
                        {/*<Route path="/sign_up" component={Sign_Up} />*/}
                    {/*/!*</div>*!/*/}
                </form>
            </div>
        )
    }
}

export default LogInForm;
