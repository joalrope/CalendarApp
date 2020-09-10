import { types } from '../types/types';

/*
{
    events: [],
    active: null || {
                        id: '44cf9e4c5744z3896',
                        title: '',
                        body: '',
                        ...,
                        ...
                    }
}
*/

const initialState = {
    events: [],
    active: null
}

export const eventsReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case types.eventsActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case  types.eventsAddNew:
            return {
                ...state,
                events: [ action.payload, ...state.events ]
            }            

        case types.eventsLoad:
            return {
                ...state,
                events: [...action.payload]
            }

        case types.eventsUpdated:
            return {
                ...state,
                events: state.events.map(
                    event => event.id === action.payload.id
                        ? action.payload.event
                        : event
                )

            }

        case types.eventsDelete:
            return {
                ...state,
                active: null,
                events: state.events.filter(event => event.id !== action.payload)
            }

        case types.eventsLogoutCleaninig:
            return {
                ...state,
                events: [],
                active: null
            }
    
        default:
            return state;
    }

}
