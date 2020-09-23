import React from 'react';
import { useDispatch } from 'react-redux';
import { startHideLogin, startLogin } from '../../actions/auth';
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
    

    return (
        <div className="login-form animate__animated animate__fadeIn">
            <button type="button" className="close" aria-label="Close" onClick={handleHideLogin}>
                <span aria-hidden="true">&times;</span>
            </button>
            <h3>Ingreso</h3>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Correo"
                        name="Email"
                        value= {Email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
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
                        className="btnSubmit"
                        value="Login" 
                    />
                </div>
            </form>
        </div>
    )
}