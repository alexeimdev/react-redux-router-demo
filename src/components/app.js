import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/configureStore';
import AppHeader from './shared/appHeader';
import AppContainer from './shared/appContainer';
import AppFooter from './shared/appFooter';

export default function App(props) {
    return (
        <Provider store={store}>
            <AppHeader />
            <AppContainer />
            <AppFooter />
        </Provider>
    )
}