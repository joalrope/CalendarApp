import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';
import { eventsReducer } from './eventsReducer';


export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    events: eventsReducer
})

