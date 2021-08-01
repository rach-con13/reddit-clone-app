import { AccordionActions } from '@material-ui/core';
import * as action from '../actions/Constants/AuthConstants';
const initState = {
    user:[],
    message:[],
    loggedIn:false,
    hasError:false,
    isLoading:false,
    hasLoaded:false
}

const authReducer = (state = initState,action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            const {user} = action.payload;
            
            return {
                ...state,
                user:[user],
                loggedIn:true
            }
     
        case 'LOGOUT_USER':
            return {
                ...state,
                user:[],
                loggedIn:false,  
            }
        default:
            return state
    }
}
export default authReducer;