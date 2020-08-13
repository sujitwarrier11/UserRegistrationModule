import { takeLatest, all,takeEvery } from 'redux-saga/effects';
import { LOGIN, CALL_REGISTER } from '@root/src/Redux/constants';
import { login, register } from '@root/src/Redux/sagas/userSaga';
import "regenerator-runtime/runtime";

export default function* root() {
    yield all([
        takeEvery(LOGIN, login),
        takeEvery(CALL_REGISTER,register)
    ]);
}