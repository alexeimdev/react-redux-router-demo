import { combineReducers } from 'redux';
import test from './testReducer';
import subscribers from './subscribersReducer';

export default combineReducers({
    test,
    subscribers,
})