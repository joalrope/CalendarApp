import React from 'react'
import { useDispatch } from 'react-redux';
import { startOpenModal } from '../../actions/ui';


export const NavBar = () => {

    const dispatch = useDispatch();

    const handleEventAddClick = () => {
        console.log('Agregar evento');
        dispatch(startOpenModal());
    }

    const handleQuitClick = () => {
        console.log('Salir');
    }


    return (
        <div className="navbar navbar-dark bg-dark">
            <span className="navbar-brand">
                Pedro
            </span>

            <button className="btn btn-sm btn-outline btn-success" onClick={handleEventAddClick}>
                <i className="fas fa-calendar-plus"></i>
                <span> Evento</span>
            </button>
            
            <button className="btn btn-sm btn-outline btn-danger" onClick={handleQuitClick}>
                <i className='fas fa-sign-out-alt '></i>
                <span> Salir</span>
            </button>            
        </div>
    )
}
