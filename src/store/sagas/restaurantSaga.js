import { select, takeEvery } from 'redux-saga/effects';
import { RESTAURANT } from '../constants';



function* initLoadRestaurant() {
    const restaurants = yield select(state => state.restaurants);
    console.log(restaurants);
}


export default function* watchRestaurant() {
    yield takeEvery(RESTAURANT.LOAD_INIT, initLoadRestaurant);
}