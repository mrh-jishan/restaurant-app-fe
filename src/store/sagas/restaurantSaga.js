import { call, put, select, takeEvery } from 'redux-saga/effects';
import { errorRestaurantsLoad, successRestaurantsLoad } from '../actions/restaurant';
import { RESTAURANT } from '../constants';
import { getRestaurant } from '../services/api';

function* initLoadRestaurant() {
    try {
        const { page, name, days, timeRange } = yield select(state => state.restaurants.params);
        const [opens, closes] = timeRange;

        const { data } = yield call(getRestaurant, { days: days.join(), name: name, page: page, opens: opens.format('HH:mm'), closes: closes.format('HH:mm'), })
        yield put(successRestaurantsLoad(data))
    } catch (e) {
        yield put(errorRestaurantsLoad(e))
    }
}

export default function* watchRestaurant() {
    yield takeEvery(RESTAURANT.LOAD_INIT, initLoadRestaurant);
}