import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import restaurantSaga from './restaurantSaga';
import invitationsSaga from './invitationsSaga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        restaurantSaga(),
        invitationsSaga()
    ]);
}