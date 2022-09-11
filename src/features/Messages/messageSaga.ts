import { takeEvery, takeLatest, fork, call, put } from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { take } from 'redux-saga/effects';
import { getMessageListSuccess,
        getMessageListFailure,
        getMessageList,
        getConversationDetail,
        getConversationDetailSuccess,
        getConversationDetailFailure } from './messageSlice';
import { apiService } from '@/services/apiService'
import { AxiosResponse } from 'axios';

const Conversation = apiService.get('conversation');
const Message = apiService.get('message');

export function* handleGetMessageList(action: PayloadAction) {
    try {
        const payload = action.payload;
        const response: AxiosResponse = yield call(Conversation.getAll, payload)
        yield put(getMessageListSuccess(response))
    } catch (error) {
        yield put(getMessageListFailure(error))
    }
}

export function* handleGetConversationDetail(action: PayloadAction) {
    try {
        const payload = action.payload;
        const response: AxiosResponse = yield call(Message.getAll, payload)
        yield put(getConversationDetailSuccess(response))
        
    } catch (error) {
        yield put(getConversationDetailFailure(error))
    }
}


export default function* MessageSaga() {
    yield takeLatest(getMessageList.type, handleGetMessageList);
    yield takeLatest(getConversationDetail.type, handleGetConversationDetail);
}