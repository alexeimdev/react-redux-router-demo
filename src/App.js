import React from 'react';

import AppHeader from './components/shared/appHeader';
import AppContainer from './components/shared/appContainer';
import AppFooter from './components/shared/appFooter';

export default function App(props) {
    return (
        <>
            <AppHeader />
            <AppContainer />
            <AppFooter />
        </>
    )
}