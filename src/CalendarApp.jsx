import React from 'react'
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';


export const CalendarApp = () => {
    return (
        <div className="calendar-screen">
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </div>
    )
}
