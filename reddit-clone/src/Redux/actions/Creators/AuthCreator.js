import * as action from '../../actions/Constants/AuthConstants';

export const LOGIN_USER = (user) => ({
    type:action.LOGIN_USER,
    payload:{
        user
    }
})

export const LOGIN_USER_FAILURE = (message) => ({
    type:action.LOGIN_USER_FAILURE,
    payload:{
        message
    }
})
export const LOGOUT_USER = () => ({
    type:'LOGOUT_USER'
})