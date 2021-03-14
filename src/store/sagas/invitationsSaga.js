import { call, put, takeEvery } from 'redux-saga/effects';
import { errorInvitationsLoad, successInvitationsLoad } from '../actions/invitations';
import { INVITATIONS } from '../constants';
import { getInvitations } from '../services/api';

function* initLoadInvitations() {
    try {
        const { data } = yield call(getInvitations)
        yield put(successInvitationsLoad(data))
    } catch (e) {
        yield put(errorInvitationsLoad(e))
    }
}

export default function* watchRestaurant() {
    yield takeEvery(INVITATIONS.LOAD_INIT, initLoadInvitations);


}