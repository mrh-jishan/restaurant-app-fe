import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import restaurantSaga from './restaurantSaga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        restaurantSaga()
    ]);
}