import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startHideLogin, startHideRegister, startLogout, startShowLogin, startShowRegister } from '../../actions/auth';
import './styles.css';



export const NavBar = () => {

    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(startLogout());
    }

    const handleShowLogin = () => {
        dispatch(startShowLogin());
        dispatch(startHideRegister());
    }

    const handleShowRegister = () => {
        dispatch(startShowRegister());
        dispatch(startHideLogin());
    }

    const {name} = useSelector(state => state.auth);

    return (
        <div className="navbar navbar-dark bg-dark navbar-container">
            <span className="navbar-brand user-name">
                 {(name) ? name : 'Bienvenido'}
            </span>

            { (name) ?  <div className="navbar-buttons">
                            <button className="btn btn-sm btn-outline-danger mr-5" onClick={handleLogout}>
                                <i className='fas fa-sign-out-alt '></i>
                                <span> Salir</span>
                            </button>
                        </div>
                     :
                        <div className="navbar-buttons">
                            <button className="btn btn-sm btn-outline-info mr-3" onClick={handleShowLogin}>
                                <i className='fas fa-sign-in-alt '></i>
                                <span> Ingresar </span>
                            </button>            
                            <button className="btn btn-sm btn-outline-info mr-3" onClick={handleShowRegister}>
                                <i className='fas fa-user-plus '></i>
                                <span> Registrarse</span>
                            </button>
                        </div>
            }    
        </div>
    )
}
