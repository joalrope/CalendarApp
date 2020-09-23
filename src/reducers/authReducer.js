import { types } from '../types/types';

const initialState = {
    checking: true,
    loginVisible: false,
    RegisterVisible: false,
    PassForgotVisible: false

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
        
            case types.authShowPassForgot:
            return {
                ...state,
                PassForgotVisible: action.payload
            }
    
        default:
            return state;
    }

}