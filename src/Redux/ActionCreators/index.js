import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, CALL_REGISTER, UPLOAD_FILE, GET_FILES,SET_UPLOAD_STATUS, SET_FILES } from '@root/src/Redux/constants';

export const login = payload => {
    return {
        type: LOGIN,
        payload
    };
}

export const setLoginData = payload => {
    return {
        type: LOGIN_SUCCESS,
        payload
    };
}

export const setLoginError = payload => {
    return {
        type: LOGIN_FAILURE,
        payload
    };
}



export const callRegister = payload => {
    return {
        type: CALL_REGISTER,
        payload
    };
}

export const uploadFile = payload => {
    return {
        type: UPLOAD_FILE,
        payload
    };
}

export const getFiles = () => {
    return {
        type: GET_FILES
    };
}

export const setUploadStatus = payload => {
    return {
        type: SET_UPLOAD_STATUS,
        payload
    };
}

export const setFiles = payload => {
    return {
        type: SET_FILES,
        payload
    };
}


