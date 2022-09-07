import { takeEvery, takeLatest, fork, call, put } from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { take } from 'redux-saga/effects';
import { loginSuccess, login, logout, loginFailed, logoutSuccess, logoutFailed } from './authSlice';
import { apiService } from '@/services/apiService'
import { AxiosResponse } from 'axios';

const Authenication = apiService.get('auth');

export function* handleLogin(action: PayloadAction) {
    try {
        const payload = action.payload
        const response: AxiosResponse = yield call(Authenication.login, payload)
        yield put(loginSuccess(response))
    } catch (error) {
        yield put(loginFailed(error))
    }
}

export function* handleLogout(action: PayloadAction) {
    try {
        const payload = action.payload
        const response: AxiosResponse = yield call(Authenication.logout, payload)
        yield put(logoutSuccess(response))
        
    } catch (error) {
        yield put(logoutFailed(error))
    }
    
}


export default function* AuthSaga() {
    yield takeLatest(login.type, handleLogin);
    yield takeLatest(logout.type, handleLogout);
}