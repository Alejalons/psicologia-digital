import React, {useReducer, useState, useEffect} from 'react';
import axios from 'axios';

import PatientContext from './PatientContext';
import PatientReducer from './PatientReducer';

import {
    VALIDATE_PATIENT,
    GET_PATIENT
} from '../../Types/index';

const ProyectoState = props => {

    const [_patients, setPatients] = useState([]);

    const getDataPatient =  async () => {
        await axios.get(`https://rickandmortyapi.com/api/character`)
            .then( data => {
                const {results:patient} = data.data;
                setPatients({
                    data: patient,
                    loading: false
                })
            })
            .catch(err => console.warn(err));
    }

    //inicializacion de estado..
    const initialState = {
        errorForm: false,
        patients: { data: [], loading: true}
    }

    const [state, dispatch] = useReducer(PatientReducer, initialState);

    //obtener el listado de pacientes
    const get_patient = async () => {
        await getDataPatient();

        dispatch({
            type: GET_PATIENT,
            payload: _patients
        })
    }
    const mostrarHolaMundo = () => {
        dispatch({
            type: VALIDATE_PATIENT
        })
    }
    return (
        <PatientContext.Provider
            value={{
                errorForm: state.errorForm,
                mostrarHolaMundo
            }}
        >
            {props.children}
        </PatientContext.Provider>
    )
}

export default ProyectoState;