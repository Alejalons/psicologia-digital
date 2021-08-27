import React, {useReducer} from 'react';

import PatientContext from './PatientContext';
import PatientReducer from './PatientReducer';

import {
    VALIDATE_PATIENT
} from '../../Types/index';

const ProyectoState = props => {

    //inicializacion de estado
    const initialState = {
        errorForm: false
    }

    const [state, dispatch] = useReducer(PatientReducer, initialState);

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