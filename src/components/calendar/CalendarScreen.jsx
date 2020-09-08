import React, { useState } from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';

import { CalendarEvent } from './CalendarEvent';
import { NavBar } from '../ui/NavBar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarModal } from './CalendarModal';

moment.locale('es');

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const Events =[{
    title: 'El cumpleaños del Jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar pastel',
    user: {
        _id: '123',
        name: 'Joalrope'
    }
}]

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastview') || 'month')

    const onDoubleClick = (e) => {
        console.log(e);

    }

    const onSelectEvent = (e) => {
        console.log(e);

    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastview', e);
    }

    const eventStyleGetter = ( event, start, end, isSelected ) => {

        const style = {
            backgroundColor: '#367CF7',
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
                events={Events}
                startAccessor="start"
                endAccessor="end"
                messages= {messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent= {onDoubleClick}
                onView= {onViewChange}
                onSelectEvent= {onSelectEvent}
                view= {lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal/>
        </div>
    )
}
