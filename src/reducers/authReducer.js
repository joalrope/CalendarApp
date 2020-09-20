import { types } from '../types/types';

const initialState = {
    checking: true,
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
                checking: false,
             }
    
        default:
            return state;
    }

}