import {
    VALIDATE_PATIENT
} from '../../Types/index'

export default(state, action) => {
    switch (action.type) {
        case VALIDATE_PATIENT:
            return {
                ...state,
                errorForm: true 
            }
        default:
            break;
    }
}