import { call, put, select, takeEvery } from 'redux-saga/effects';
import { errorRestaurantsLoad, successRestaurantsLoad } from '../actions/restaurant';
import { RESTAURANT } from '../constants';
import { getRestaurant } from '../services/api';

function* initLoadRestaurant() {
    try {
        const { params } = yield select(state => state.restaurants);
        const { data } = yield call(getRestaurant, {days: params.days.join(), name: params.name})
        yield put(successRestaurantsLoad(data))
    } catch (e) {
        yield put(errorRestaurantsLoad(e))
    }
}

export default function* watchRestaurant() {
    yield takeEvery(RESTAURANT.LOAD_INIT, initLoadRestaurant);
}