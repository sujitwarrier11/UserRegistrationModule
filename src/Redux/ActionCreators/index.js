import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, CALL_REGISTER } from '@root/src/Redux/constants';

export const login = payload => {
    return {
        type: LOGIN,
        payload
    }
}

export const setLoginData = payload => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

export const setLoginError = payload => {
    return {
        type: LOGIN_FAILURE,
        payload
    }
}



export const callRegister = payload => {
    return {
        type: CALL_REGISTER,
        payload
    }
}


