import { call, select, takeEvery, put } from 'redux-saga/effects';
import { successLogin } from '../actions/auth';
import { LOGIN } from '../constants';
import { getLocalStorage, saveLocalStorage, signOut } from '../services/api';


function* loadTokenSaga() {
    const storage = yield call(getLocalStorage)
    if(storage){
        yield put(successLogin(storage.user, storage.token))
    }
}


function* authorizeSaga() {
    const { user, token } = yield select(state => state.auth);
    yield call(saveLocalStorage, { user: user, token: token })
}



function* logoutSaga() {
    yield call(signOut)
}


export default function* watchAuth() {
    yield call(loadTokenSaga)
    yield takeEvery(LOGIN.AUTH_SUCCESS, authorizeSaga);

    yield takeEvery(LOGIN.LOGOUT, logoutSaga);
}