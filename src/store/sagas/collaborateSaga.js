import { call, put, takeEvery, select } from 'redux-saga/effects';
import { errorCollaborateLoad, successCollaborateLoad } from '../actions/collaborate';
import { COLLABORATE } from '../constants';
import { getCollaborates } from '../services/api';

function* initLoadCollaborate() {
    try {
        const { token } = yield select(state => state.collaborates);
        const { data } = yield call(getCollaborates, token)
        console.log('data: ', data);
        yield put(successCollaborateLoad(data))
    } catch (e) {
        yield put(errorCollaborateLoad('Sorry! Something went wrong...'))
    }
}

export default function* watchRestaurant() {
    yield takeEvery(COLLABORATE.LOAD_INIT, initLoadCollaborate);


}