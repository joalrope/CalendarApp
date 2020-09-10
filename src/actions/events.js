import Swal from 'sweetalert2';

import { db } from '../firebase/firebaseConfig';
import { types } from '../types/types';
import { loadEvents } from '../helper/loadEvents';


export const StartNewEvent = () => {

    return async (dispatch, getState) => {

        const {uid} = getState().auth;

        const newEvent = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        try {
            // const doc = await db.collection(`${uid}/journal/events`).add(newEvent);

            console.log(uid)

            const doc = {};
    
            dispatch(activeEvent(doc.id, newEvent));
            dispatch(addNewEvent( doc.id, newEvent ) );
        } catch (error) {
            Swal.fire('No se pudo agregar la nueva entrada', 'Journal App', 'error');
        }
    }
}

export const activeEvent = (id, events) => ({
    type: types.eventsActive,
    payload: {
        id,
        ...events
    }    
});

export const addNewEvent = ( id, events ) => ({
    type: types.eventsAddNew,
    payload: {
        id, ...events
    }
})


export const startLoadingEvents = (uid) => {

    return async(dispatch) => {
        const events = await loadEvents(uid);
        dispatch(setEvents(events));
    }
}


export const setEvents = (events) => ({
    type: types.eventsLoad,
    payload: events
});


export const startSaveEvent = (events) => {
    
    return async(dispatch, getState) => {

        const {uid} = getState().auth;

        const eventToFirestore = {...events};
        
        if (!eventToFirestore.url) {
            delete eventToFirestore.url 
        }
        delete eventToFirestore.id;

        try {
            await db.doc(`${uid}/journal/events/${events.id}`).update(eventToFirestore)
            dispatch(refreshEvent(events.id, events ));
            Swal.fire(`Nota: ${events.title} salvada`, 'Journal App', 'success');
        } catch (err) {
            Swal.fire(`No se Pudo Guardar la Nota: ${events.title}`, 'Journal App' ,'error');
        }
    }
}


export const refreshEvent = (id, events) => ({
    type: types.eventsUpdated,
    payload: {
        id,
        events
    }

});

export const startEventDelete = (id) => {

    return async (dispatch, getState) => {
        
        const {uid} = getState().auth;
        await db.doc(`${uid}/journal/events/${id}`).delete();
        dispatch(deleteEvent(id));
    }
}

export const deleteEvent = (id) => ({
    type: types.eventsDelete,
    payload: id
})

export const eventsLogout = () => ({
    type: types.eventsLogoutCleaninig,
})