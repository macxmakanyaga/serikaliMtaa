import { 
    AUTHENTICATION_UPDATED_INFO 

} from '../actions/Type'

//define initial state
const INITIAL_STATE = {
    
}

export default ( state = INITIAL_STATE , action) => {
    switch(action.type) {
        case AUTHENTICATION_UPDATED_INFO:
            return { ...state , [ action.payload.prop ]:action.payload.value };

        default:
            return state;

    }
    
}