import { takeLatest, all,takeEvery } from 'redux-saga/effects';
import { LOGIN } from '@root/src/Redux/constants';
import { login } from '@root/src/Redux/sagas/userSaga';
import "regenerator-runtime/runtime";

export default function* root() {
    yield all([
        takeEvery(LOGIN, login)
    ]);
}