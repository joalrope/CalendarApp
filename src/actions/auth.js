
import { types } from '../types/types';
import { startLoading, finishLoading } from './ui';
import { notesLogout } from './notes';


export const startLogin = (email, password) => { 

    console.log(email, password)

    return (dispatch) => {
        
        dispatch(startLoading());

       
        dispatch(login(
            // user.uid, user.displayName
        ));

        dispatch(finishLoading());
         

    }
}


export const startRegister = (email, password, name) => {

    console.log(email, password, name)

    return (dispatch) => {

        dispatch(
            // login(user.uid, user.displayName)
        )
           
    }

    
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName 
    }
});

export const startLogout = () => {
    return async (dispatch) => {

        dispatch(logout());
        dispatch(notesLogout());
    }
}


export const logout = () => ({
    type: types.logout
}) 