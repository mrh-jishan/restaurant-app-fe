import { combineReducers } from 'redux';
import authReducer from './authReducer';
import restaurantReducer from './restaurantReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    restaurants: restaurantReducer
});

export default rootReducer;