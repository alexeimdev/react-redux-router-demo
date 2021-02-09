import React from 'react';

import AppHeader from './shared/appHeader';
import AppContainer from './shared/appContainer';
import AppFooter from './shared/appFooter';

//import './app.scss';

export default function App(props) {
    return (
        <>
            <AppHeader />
            <AppContainer />
            <AppFooter />
        </>
    )
}