import { combineReducers } from 'redux';
import chillerReducer from './chillerReducer';
import userReducer from './userReducer';

export default combineReducers({
    chiller: chillerReducer,
    counter: counterReducer,
    user: userReducer
});
