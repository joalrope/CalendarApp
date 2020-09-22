import Swal from 'sweetalert2';
import { types } from '../types/types';
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch"
import { eventLogout } from './events';


export const startLogin = (email, password) => { 

    return async (dispatch) => {
        
        const resp = await fetchWithoutToken('auth', {email, password}, 'POST');
        const {ok, msg, token, uid, name} = await resp.json();

        if (ok) {
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid,
                name
            }));

        } else {
            Swal.fire('Error', msg, 'error');
        }
    }
}


export const startRegister = (name, email, password) => {

    return async (dispatch) => {
        
        const resp = await fetchWithoutToken('auth/new', {name, email, password}, 'POST');
        const {ok, msg, token, uid, name: userName} = await resp.json();


        if (ok) {
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid,
                userName
            }));

        } else {
            Swal.fire('Error', msg, 'error');
        }
    }
}


export const startChecking = () => {
    
    return async (dispatch) => {
        
        if ('token' in localStorage) {
        
            const resp = await fetchWithToken('auth/renew');
            const {ok, token, uid, name} = await resp.json();
    
            if (ok) {
                localStorage.setItem('token', token);
                localStorage.setItem('token-init-date', new Date().getTime());
    
                dispatch(login({
                    uid,
                    name
                }));
    
            } else {
                dispatch(checkingFinish());
            }
        }
    }
}


export const startLogout = () => {
    return (dispatch) =>{
        localStorage.clear();
        dispatch(logout());
        dispatch(eventLogout())
    }
}


const login = (user) => ({
    type: types.authlogin,
    payload: user
})


const checkingFinish = () => ({
    type: types.authcheckingFinish
})


const logout = () => ({
    type: types.authlogout
})