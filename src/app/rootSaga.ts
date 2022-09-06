import { all } from 'redux-saga/effects'
import authSaga from '@/features/Auth/authSaga'

function* helloSaga() {
    console.log('Hello');

}


export default function* rootSaga() {
    console.log('okkkkkk');
    yield all([helloSaga(), authSaga()])
}