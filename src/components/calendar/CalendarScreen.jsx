import React, { useState } from 'react'

import moment from 'moment';
import 'moment/locale/es';

import {Calendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent } from './CalendarEvent';
import { NavBar } from '../ui/NavBar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment); // or globalizeLocalizer
        
export const CalendarScreen = () => {

    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector(state => state.calendar);
    
    const [lastView, setLastView] = useState(localStorage.getItem('lastview') || 'month')

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e));
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastview', e);
    }

    const onSelectSlot = (e) => {
        dispatch(eventClearActiveEvent());
    }

    const eventPropGetter = ( event, start, end, isSelected ) => {

        const style = {
            backgroundColor: '367CF7',
            borderRadius: '0px',
            opacity: 0.66,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    };

    return (
        <div>
          <NavBar/>

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages= {messages}
                eventPropGetter={eventPropGetter}
                onDoubleClickEvent= {onDoubleClick}
                onSelectEvent= {onSelectEvent}
                onView= {onViewChange}
                onSelectSlot={onSelectSlot}
                selectable={true}
                view= {lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewFab />
            {
                (!!activeEvent) && <DeleteEventFab />
            }
            <CalendarModal />
        </div>
    )
}
