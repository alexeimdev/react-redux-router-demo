import { createStore, applyMiddleware } from 'redux';
import rooReducer from '../reducers'

const initialState = {};

export default createStore(
    rooReducer,
    initialState,
    applyMiddleware(),
);