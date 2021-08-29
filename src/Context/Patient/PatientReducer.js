import {
    VALIDATE_PATIENT
} from '../../Types/index'

const PatientReducer = (state, action) => {
    switch (action.type) {
        case VALIDATE_PATIENT:
            return {
                ...state,
                errorForm: true
            }
        default:
            return state
    }
}

export default PatientReducer;