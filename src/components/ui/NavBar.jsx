import React from 'react'

const handleEventAddClick = () => {
    console.log('Agregar evento');
}

const handleQuitClick = () => {
    console.log('Salir');
}

export const NavBar = () => {
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
