import types from './types';
import axios from 'axios';


const BASE_URL = 'http://api.reactprototypes.com';

export function signin({email, password}){
    return dispatch => {
        axios.post(`${BASE_URL}/signin`, {email, password}).then((resp) => {
            console.log("Sign In resp:", resp);
            localStorage.setItem('token', resp.data.token)
            dispatch({
                type: types.SIGNIN
            });
        }).catch(error => {
            dispatch(sendError("Invalid username or password"));
        });
    };
};

export function signup({fname, lname, phone, email, password, password_conf, dob}){
    return (dispatch) => {
        axios.post(`${BASE_URL}/sign_up`, {fname, lname, phone, email, password, password_conf, dob}).then((resp) => {
            console.log("Sign Up resp", resp);
            localStorage.setItem('token', resp.data.token);
            dispatch({
                type: types.SIGNUP
            });
        }).catch((error) => {
            dispatch(sendError(error.response.data.error));
        });
    };
};

function sendError(msg){
    return{
        type: types.ERROR,
        error: msg
    }
}

