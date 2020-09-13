import { types } from '../types/types';
import moment from 'moment';





const initialState = {
    events: [{
        id: new Date().getTime(),
        title: 'El cumpleaños del Jefe',
        start: moment().minutes(0).seconds(0).toDate(),
        end: moment().minutes(0).seconds(0).add(1, 'hours').toDate(), 
        bgcolor: '#fafafa',
        notes: 'Comprar pastel',
        user: {
            _id: '123',
            name: 'Joalrope'
        }
    }],
    activeEvent: null
}


export const calendarReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case  types.eventAddNew :
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }  
            
        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }

        case types.eventSetActive:
            return {
                ...state,
                activeEvent: {
                    ...action.payload
                }
            }

        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            };

        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter(
                    e => (e.id !== state.activeEvent.id)
                    ),
                activeEvent: null
            }

        // case types.eventsLoad:
        //     return {
        //         ...state,
        //         events: [...action.payload]
        //     }

        // case types.eventsLogoutCleaninig:
        //     return {
        //         ...state,
        //         events: [],
        //         active: null
        //     }
    
        default:
            return state;
    }

}