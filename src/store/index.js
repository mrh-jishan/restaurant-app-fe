import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(
            sagaMiddleware,
            logger
        ))
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;