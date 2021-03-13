import { call, put, select, take, takeEvery } from 'redux-saga/effects';
import { errorCollectionsLoad, successCollectionsLoad } from '../actions/collections';
import { errorRestaurantsLoad, successRestaurantsLoad } from '../actions/restaurant';
import { COLLECTIONS, RESTAURANT, LOGIN } from '../constants';
import { getCollection, getRestaurant } from '../services/api';

function* initLoadRestaurant() {
    try {
        const { page, name, days, timeRange } = yield select(state => state.restaurants.params);
        const [opens, closes] = timeRange;

        const { data } = yield call(getRestaurant, {
            days: days.join(),
            name: name,
            page: page,
            opens: opens.format('HH:mm'),
            closes: closes.format('HH:mm'),
        })
        yield put(successRestaurantsLoad(data))
    } catch (e) {
        yield put(errorRestaurantsLoad(e))
    }
}

function* addRestaurantSaga() {
    console.log('get collections-------------------------');
    try {
        const { data } = yield call(getCollection)
        yield put(successCollectionsLoad(data))
    } catch (e) {
        yield put(errorCollectionsLoad(e))
    }
}

export default function* watchRestaurant() {
    yield takeEvery(RESTAURANT.LOAD_INIT, initLoadRestaurant);

    yield take(LOGIN.AUTH_SUCCESS);

    yield takeEvery(COLLECTIONS.LOAD_INIT, addRestaurantSaga);
}