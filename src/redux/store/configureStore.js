import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rooReducer from '../reducers'

const initialState = {};

export default createStore(
    rooReducer,
    initialState,
    applyMiddleware(thunk),
);