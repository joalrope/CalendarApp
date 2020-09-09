import React, { useState } from 'react'
import Modal from 'react-modal';

import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};


Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');

export const CalendarModal = () => {

    const [startDate, setStartDate] = useState(now.toDate());
    const [endDate, setEndDate] = useState(nowPlus1.toDate());
    const [validTitle, setValidTitle] = useState(true);
    const [validEndDate, setValidEndDate] = useState(true);

    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
        start: now.toDate(),
        end: nowPlus1.toDate()
    });

    const {title, notes, start, end} = formValues;

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleStartDateChange = (e) => {
        setStartDate(e);
        setFormValues({
            ...formValues,
            start: e
        })
    }

    const handleEndDateChange = (e) => {
        setEndDate(e);
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const handleTitleInputFocus = () => {
        setValidTitle(true);
    }

    const handleEndDateInputFocus = () => {
        setValidEndDate(true);
    }

    const closeModal = () => {

        // TODO Cerrar el Modal
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const momentStart = moment(start);
        const momentEnd = moment(end);

        if (momentStart.isSameOrAfter(momentEnd)) {
            setValidEndDate(false);

        }
        
        if (title.trim().length === 0) {
            setValidTitle(false);
        }

        // TODO Realizar guardar datos en bd

        closeModal();
        
    }


    return (
        <Modal
          isOpen={true}
        //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          closeTimeoutMS= {200}
          className= 'modal'
          overlayClassName= 'modal-fondo'
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form
                className="container"
                onSubmit={handleSubmitForm}
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={handleStartDateChange}
                        value={startDate}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={handleEndDateChange}
                        value={endDate}
                        minDate={startDate}
                        // className="form-control"
                        className={`form-control ${!validEndDate && 'is-invalid'}`}
                        onFocus= {handleEndDateInputFocus}
                        id="validEndDate"
                    />
                    <div id="validEndDate" className="invalid-feedback">
                        La fecha y hora fin debe ser mayor a la fecha y hora inicio.
                    </div>
                </div>
                {validEndDate && <hr />}
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${!validTitle && 'is-invalid'}`}
                        placeholder="Título del evento"
                        name="title"
                        value= {title}
                        onChange={handleInputChange}
                        onFocus= {handleTitleInputFocus}
                        id="validTitle"
                        autoComplete="off"
                    />
                    <div id="validTitle" className="invalid-feedback">
                        Por favor indique una descripcion corta al titulo del evento.
                    </div>
                    { validTitle && <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>}
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>
            </form>
        </Modal>
    )
}
