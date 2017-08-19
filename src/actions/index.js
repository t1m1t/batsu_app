import types from './types';
import axios from 'axios';


// const BASE_URL = 'http://api.reactprototypes.com';

export function signin({email, password}){
    return dispatch => {
        axios.post(`http://localhost/Website/accountability_db/c5.17_accountability/php/form.php?operation=signin`, {email, password}).then((resp) => {
            console.log("Sign In resp:", resp);

            // localStorage.setItem('token', resp.data.token)
            if(resp.data.success === true){
                var now = new Date();
                var time = now.getTime();
                var expireTime = time + 86400000;   //24 hours
                now.setTime(expireTime);
                document.cookie = "token="+resp.data.token+";expires="+now.toUTCString()+";path=/";
                // history.push('/map');
            }
            else{
                //stay on sign up page
                console.log("don't call this");
                throw new Error("you dun goofed");
            }
            dispatch({
                type: types.SIGNIN
            });
        }).catch(error => {
            console.log("errorss: ", error);
            dispatch(sendError("Invalid username or password"));
        });
    };
};

export function signup({fname, lname, phone, email, password, password_conf, dob}, history){
    return (dispatch) => {
        axios.post(`http://localhost/Website/accountability_db/c5.17_accountability/php/form.php?operation=insertUser`, {fname, lname, phone, email, password, password_conf, dob}).then((resp) => {
            console.log("Sign Up resp", resp);
            // localStorage.setItem('token', resp.data.token);
            if(resp.data.success === true){
                var now = new Date();
                var time = now.getTime();
                var expireTime = time + 86400000;   //24 hours
                now.setTime(expireTime);
                document.cookie = "token="+resp.data.token+";expires="+now.toUTCString()+";path=/";
                history.push('/home');
            }
            else{
                let message = "";
                resp.data.errors.map(function(error_msg, val){
                    message += error_msg + ". ";
                })
                // console.log(resp.data.errors);

                throw new Error(message);
            }
            dispatch({
                type: types.SIGNUP
            });
        }).catch((error) => {
             console.log("errorss: ", error);
            dispatch(sendError(error.message));
        });
    };
};
export function clearError(){
    return {type:types.clearError};
}

function sendError(msg){
    return{
        type: types.ERROR,
        error: msg
    }
}

