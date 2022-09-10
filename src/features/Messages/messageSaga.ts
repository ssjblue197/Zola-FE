import { takeEvery, takeLatest, fork, call, put } from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { take } from 'redux-saga/effects';
import { getMessageListSuccess, getMessageListFailure, getMessageList } from './messageSlice';
import { apiService } from '@/services/apiService'
import { AxiosResponse } from 'axios';

const Conversation = apiService.get('conversation');

export function* handleGetMessageList(action: PayloadAction) {
    try {
        const payload = action.payload;
        const response: AxiosResponse = yield call(Conversation.getAll, payload)
        // yield put(loginSuccess(response))
    } catch (error) {
        // yield put(loginFailed(error))
    }
}

export function* handleLogout(action: PayloadAction) {
    // try {
    //     const payload = action.payload
    //     const response: AxiosResponse = yield call(Authenication.logout, payload)
    //     yield put(logoutSuccess(response))

    // } catch (error) {
    //     yield put(logoutFailed(error))
    // }

}


export default function* AuthSaga() {
    yield takeLatest(getMessageList.type, handleGetMessageList);
    // yield takeLatest(logout.type, handleLogout);
}