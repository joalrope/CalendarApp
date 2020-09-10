import { types } from '../types/types';

/*  
    {
        uid: j807ojh89jklj087kj965,
        name: 'Joalrope'                                                                                                                  
    }
*/
export const authReducer = ( state = { }, action ) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return { }
    
        default:
            return state;
    }

}