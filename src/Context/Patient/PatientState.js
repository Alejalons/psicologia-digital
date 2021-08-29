import React, {useReducer, useState, useEffect} from 'react';
import axios from 'axios';

import PatientContext from './PatientContext';
import PatientReducer from './PatientReducer';

import {
    VALIDATE_PATIENT,
    GET_PATIENT
} from '../../Types/index';

const ProyectoState = props => {

    const [patients, setPatients] = useState({
        data: [],
        loanding: true
    });

    useEffect( async () => {
        await axios.get(`https://rickandmortyapi.com/api/character`)
            .then( data => {
                const {results:patient} = data.data;
                setPatients({
                    data: patient,
                    loanding: false
                })
            })
            .catch(err => console.warn(err));

    }, [])

    //inicializacion de estado
    const initialState = {
        errorForm: false,
        patients: {}
    }

    const [state, dispatch] = useReducer(PatientReducer, initialState);

    const get_patient = () => {
        dispatch({
            type: GET_PATIENT,
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