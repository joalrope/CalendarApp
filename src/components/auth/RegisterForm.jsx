import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startHideRegister, startRegister, startShowLogin } from '../../actions/auth';
import { useForm } from '../../hooks/userForm';
import './styles.css';

export const RegisterForm = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        Name: '',
        Email: '',
        Password1: '',
        Password2: ''
    });

    const {Name, Email, Password1, Password2} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Password1 !== Password2) {
            return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error')
        }
        dispatch(startRegister(Name, Email, Password1));
    }

    const handleHideRegister = () => {
        dispatch(startHideRegister());
    }

    const handleShowLogin = () => {
        handleHideRegister();
        dispatch(startShowLogin());
    }
    

    return (
        <div className="register-form bg-dark animate__animated animate__fadeIn">
            <button className="btn close" onClick={handleHideRegister}>
                <i className='far fa-times-circle'></i>
            </button> 
            <h3>Registro</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        name="Name"
                        value={Name}
                        onChange={handleInputChange}
                    />
                </div>
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
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        name="Password1"
                        value={Password1}
                        onChange={handleInputChange} 
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Repita la contraseña" 
                        name="Password2"
                        value={Password2}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="submit" 
                        className="btn btn-sm btn-outline-info btnSubmit" 
                        value="Crear cuenta" />
                </div>

                <div className="goto-right" onClick={handleShowLogin}>
                    <small className="text-info">¿Ya esta registrado?</small>
                </div>
            </form>
        </div>
    )
}