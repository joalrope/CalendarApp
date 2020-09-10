// import { db } from '../firebase/firebaseConfig';


export const loadNotes = async (uid) => {

    // const notesInDB = await db.collection(`${uid}/journal/notes`).orderBy('date').get()   
    const eventsInDB = {}; 
    const events = [];

    eventsInDB.forEach( event => {
        events.push({
            id: event.id,
            ...event.data()
        });
    });

    return events;
}