import { takeEvery } from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit'

export function* log(action: PayloadAction) {
    console.log('hiasdhioasd');

}

export default function* testAuthSaga() {
    console.log('test middle');
    yield takeEvery('*', log);
}