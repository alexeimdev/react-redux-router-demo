import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rooReducer from '../reducers'

const initialState = {};

export default createStore(
    rooReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
);