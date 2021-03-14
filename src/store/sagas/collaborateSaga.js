import { call, put, takeEvery } from 'redux-saga/effects';
import { errorCollaborateLoad, successCollaborateLoad } from '../actions/collaborate';
import { COLLABORATE } from '../constants';
import { getCollaborates } from '../services/api';

function* initLoadCollaborate() {
    try {
        const id = "eg3uuuAF8CgbUQa_aYQYag"
        const { data } = yield call(getCollaborates, id)
        yield put(successCollaborateLoad(data))
    } catch (e) {
        yield put(errorCollaborateLoad(e))
    }
}

export default function* watchRestaurant() {
    yield takeEvery(COLLABORATE.LOAD_INIT, initLoadCollaborate);


}