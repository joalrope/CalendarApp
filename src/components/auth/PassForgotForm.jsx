import React from 'react';
import { startHidePassForgot, startPassRecovery } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/userForm';
import './styles.css';

export const PassForgotForm = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        Email: '',
    });

    const {Email} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Enviando para recuperar contraseña de usuario: ${Email}`)
        handleHidePassForgot();
        dispatch(startPassRecovery(Email));
    }

    const handleHidePassForgot = () => {
        dispatch(startHidePassForgot());
    }
    

    return (
        <div className="register-form bg-dark animate__animated animate__fadeIn">
            <button className="btn close" onClick={handleHidePassForgot}>
                <i className='far fa-times-circle'></i>
            </button> 
            <h5>Recuperar Contraseña</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Correo"
                        name="Email"
                        value={Email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="submit" 
                        className="btn btn-sm btn-outline-info btnSubmit" 
                        value="Enviar" />
                </div>
            </form>
        </div>
    )
}