import { takeLatest, all,takeEvery } from 'redux-saga/effects';
import { LOGIN, CALL_REGISTER, UPLOAD_FILE, GET_FILES } from '@root/src/Redux/constants';
import { login, register, uploadFile, getFiles } from '@root/src/Redux/sagas/userSaga';
import "regenerator-runtime/runtime";

export default function* root() {
    yield all([
        takeLatest(LOGIN, login),
        takeLatest(CALL_REGISTER, register),
        takeLatest(UPLOAD_FILE, uploadFile),
        takeLatest(GET_FILES, getFiles)
    ]);
}