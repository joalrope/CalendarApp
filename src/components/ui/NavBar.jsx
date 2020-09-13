import React from 'react'





export const NavBar = () => {

    const handleQuitClick = () => {
        console.log('Salir');
    }


    return (
        <div className="navbar navbar-dark bg-dark">
            <span className="navbar-brand">
                Pedro
            </span>
            
            <button className="btn btn-sm btn-outline btn-danger mr-5" onClick={handleQuitClick}>
                <i className='fas fa-sign-out-alt '></i>
                <span> Salir</span>
            </button>            
        </div>
    )
}
