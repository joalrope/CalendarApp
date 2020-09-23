import { types } from '../types/types';

const initialState = {
    checking: true,
    loginVisible: false,
    RegisterVisible: false
    // uid: null,
    // name: null

}
export const authReducer = ( state = initialState, action ) => {

    
    switch (action.type) {
        case types.authlogin:
            return {
                ...state,
                ...action.payload,
                checking: false
            }

        case types.authcheckingFinish:
            return {
                ...state,
                checking: false
            }

        case types.authlogout:
            return {
                state: undefined,
             }

        case types.authShowLogin:
            return {
                ...state,
                loginVisible: action.payload
            }
        
        case types.authShowRegister:
            return {
                ...state,
                RegisterVisible: action.payload
            }
    
        default:
            return state;
    }

}