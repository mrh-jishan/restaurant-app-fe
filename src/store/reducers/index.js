import { combineReducers } from 'redux';
import authReducer from './authReducer';
import collectionsReducer from './collectionsReducer';
import restaurantReducer from './restaurantReducer';
import invitationsReducer from './invitationsReducer';
import collaborateReducer from './collaborateReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    restaurants: restaurantReducer,
    collections: collectionsReducer,
    invitations: invitationsReducer,
    collaborates: collaborateReducer
});

export default rootReducer;