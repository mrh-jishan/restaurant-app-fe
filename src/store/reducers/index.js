import { combineReducers } from 'redux';
import authReducer from './authReducer';
import collectionsReducer from './collectionsReducer';
import restaurantReducer from './restaurantReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    restaurants: restaurantReducer,
    collections: collectionsReducer
});

export default rootReducer;