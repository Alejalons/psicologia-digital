import React, {useReducer} from 'react';

import PatientContext from './PatientContext';
import PatientReducer from './PatientReducer';

const ProyectoState = props => {

    //inicializacion de estado
    const initialState = {
        errorForm = false
    }

    const [state, dispatch] = useReducer(PatientReducer, initialState);

    const mostrarHolaMundo = () => {
        dispatch({
            type: 
        })
    }
    return (
        <PatientContext.Provider
            value={{

            }}
        >
            {props.children}
        </PatientContext.Provider>
    )
}

export default ProyectoState;