import { put, select } from 'redux-saga/effects';
import httpRequest from '@root/Utilities/httpRequest';
import { setLoginData, setLoginError } from '@root/src/Redux/ActionCreators';
import { push } from 'connected-react-router';



export function* login({ payload }) {
    const { username, password } = payload;
    const response = yield httpRequest({
        method: 'POST',
        url: `/api/login`,
        data: { user: { username, password } },
        headers: {}
    });
    console.log("response", response);
    if (response.data.errors) {
        yield put(setLoginError(response.data.errors));
    }
    else {
        yield put(setLoginData(response.data.user));
        yield put(push('/profile'));
    }

}


export function* register({ payload }) {
    const response = yield httpRequest({
        method: 'POST',
        url: `/api/register`,
        data: { user: { ...payload } },
        headers: {}
    });
    console.log("response", response);
    if (response.data.errors) {
        yield put(setLoginError(response.data.errors));
    }
    else {
        yield put(setLoginData(response.data.user));
        yield put(push('/profile'));
    }

}

