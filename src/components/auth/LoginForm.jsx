import React from 'react';
import { useDispatch } from 'react-redux';
import { startHideLogin, startLogin, startShowPassForgot, startShowRegister } from '../../actions/auth';
import { useForm } from '../../hooks/userForm';
import './styles.css';

export const LoginForm = () => {

    const dispatch = useDispatch();
    
    const [formValues, handleInputChange] = useForm({
        Email: '',
        Password: ''
    });
    
    const {Email, Password} = formValues;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLogin(Email, Password));
    }

    const handleHideLogin = () => {
        dispatch(startHideLogin());
    }

    const handleShowRegister = () => {
        dispatch(startShowRegister());
        handleHideLogin();
    }

    const handleShowPasswordForgot = () => {
        dispatch(startShowPassForgot());
        handleHideLogin();
    }
    

    return (
        <div className="login-form bg-dark animate__animated animate__fadeIn">
            <button className="btn close" onClick={handleHideLogin}>
                <i className='far fa-times-circle'></i>
            </button> 
            <h3 className="pb-3">Ingreso</h3>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control col-form-label-sm"
                        placeholder="Correo"
                        name="Email"
                        value= {Email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control col-form-label-sm"
                        placeholder="Contraseña"
                        autoComplete="new-password"
                        name="Password"
                        value={Password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="submit"
                        className="btn btn-sm btn-outline-info btnSubmit"
                        value="Login" 
                    />
                </div>
                <div className="goto-right" onClick={handleShowPasswordForgot}>
                    <small className="text-info">¿Olvido su contraseña?</small>
                </div>
                <div className="goto-right" onClick={handleShowRegister}>
                    <small className="text-info">¿No tienes cuenta?</small>
                </div>
            </form>
        </div>
    )
}