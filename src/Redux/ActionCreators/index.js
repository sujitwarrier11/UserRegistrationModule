import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from '@root/src/Redux/constants';

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



export const getDetails = payload => {
    return {
        type: GET_DETAILS,
        payload
    }
}

export const setDetails = payload => {
    return {
        type: SET_DETAILS,
        payload
    }
}

export const setSelectedShow = payload => {
    return {
        type: SET_SELECTED_SHOW,
        payload
    }
}

export const setPage = payload => {
    return {
        type: SAVED_PAGES,
        payload
    }
}
