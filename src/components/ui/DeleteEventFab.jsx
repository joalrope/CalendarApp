import React from 'react';
import { useDispatch } from 'react-redux';
import { eventDeleted } from '../../actions/events';


export const DeleteEventFab = () => {
    
    const dispatch = useDispatch();
    
    const handleBtnDeleteClick = () => {
        dispatch(eventDeleted());
    };

    
    return (
        <button className="btn btn-danger fab-danger" onClick={handleBtnDeleteClick} >
           <div className="fnab">
               <i className="fas fa-trash"></i>
               <span> Eliminar Evento</span>
           </div>
        </button>
    )
}
