import {
    VALIDATE_PATIENT,
    GET_PATIENT
} from '../../Types/index'

const PatientReducer = (state, action) => {
    switch (action.type) {
        case VALIDATE_PATIENT:
            return {
                ...state,
                errorForm: true
            }
        case GET_PATIENT:
            return {
                ...state,
                patients: action.payload
            }
        default:
            return state
    }
}

export default PatientReducer;