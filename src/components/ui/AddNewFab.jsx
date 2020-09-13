import React from 'react';
import { useDispatch } from 'react-redux';
import { eventClearActiveEvent } from '../../actions/events';
import { uiOpenModal } from '../../actions/ui';


export const AddNewFab = () => {
    
    const dispatch = useDispatch();
    
    
    const handleBtnAddNewClick = () => {
        dispatch(eventClearActiveEvent());
        dispatch(uiOpenModal());
    }


    return (
        <button className="btn btn-primary fab" onClick={handleBtnAddNewClick} >
           <div className="fnab">
               <i className="fas fa-calendar-plus"></i>
           </div>
        </button>
    )
}
