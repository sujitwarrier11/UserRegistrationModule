import { put, select } from 'redux-saga/effects';
import httpRequest from '@root/Utilities/httpRequest';
import { setLoginData, setLoginError, setUploadStatus, setFiles } from '@root/src/Redux/ActionCreators';
import { push } from 'connected-react-router';
import { _ } from 'core-js';



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

export function* uploadFile({ payload }){
    const response = yield httpRequest({
        method: 'POST',
        url: `/api/upload`,
        data: { file: payload },
        headers: {}
    });
    console.log("response",response);
    if(!response.data.errors){
       yield put(setUploadStatus({
           type: "error",
           description: 'something went wrong.'
       }));
    }
    else{
        yield put(setFiles(response.data.files));
        yield put(setUploadStatus({
            type: "success",
            description: 'Upload successful.'
        }));
    }
}

export function* getFiles(){
    const response = yield httpRequest({
        method: 'POST',
        url: `/api/getfiles`,
        headers: {}
    });
    yield put(setFiles(response.data.files));
}

