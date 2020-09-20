import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';



export const NavBar = () => {

    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(startLogout());
    }

    const {name} = useSelector(state => state.auth);

    return (
        <div className="navbar navbar-dark bg-dark">
            <span className="navbar-brand">
                 {name}
            </span>
            
            <button className="btn btn-sm btn-outline-danger mr-5" onClick={handleLogout}>
                <i className='fas fa-sign-out-alt '></i>
                <span> Salir</span>
            </button>            
        </div>
    )
}
