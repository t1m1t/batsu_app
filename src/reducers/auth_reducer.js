import types from '../actions/types';


const DEFAULT_STATE = { authorized: false, error: null, msg: '' };

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.SIGNIN:
        case types.SIGNUP:
            return { ...state, authorized: true, error: null };
        case types.ERROR:
            return { ...state, error:action.error };
        default:
            return state;
    }
}