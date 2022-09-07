import { takeEvery, takeLatest, fork, call, put } from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { take } from 'redux-saga/effects';
import { loginSuccess, login, LoginPayload, logout, loginFailed } from './authSlice';
import { apiService } from '@/services/apiService'
import { AxiosResponse } from 'axios';
import { checkIsAuthenticated } from '@/utils/auth';

const Authenication = apiService.get('auth');

export function* handleLogin(action: PayloadAction) {
    try {
        const payload = action.payload
        const response: AxiosResponse = yield call(Authenication.post, payload)
        yield put(loginSuccess(response))
    } catch (error) {
        yield put(loginFailed(error))
    }
}

export function* handleLogout() {

}


export default function* AuthSaga() {
    yield takeLatest(login.type, handleLogin);
}