import React from 'react';
import Header from './header';
import Container from './container';
import Footer from './footer';

export default function App(props) {
    return (
        <div className="app-wrapper">
            <Header />
            <Container />
            <Footer />
        </div>
    )
}