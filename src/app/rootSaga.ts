import { all } from 'redux-saga/effects'
import authSaga from '@/features/Auth/authSaga'
import messageSaga from '@/features/Messages/messageSaga'


export default function* rootSaga() {
    yield all([authSaga(), messageSaga()])
}