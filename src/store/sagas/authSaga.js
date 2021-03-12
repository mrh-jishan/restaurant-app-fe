import { select, takeEvery } from 'redux-saga/effects';
import { LOGIN } from '../constants';


function* authorizeSaga() {
    const auth = yield select(state => state.auth);
    console.log('auth: ', auth);

}


export default function* watchAuth() {
    yield takeEvery(LOGIN.INIT_AUTH, authorizeSaga);

    // yield take(LOGIN.LOGOUT);
    // yield call(signOut)
}