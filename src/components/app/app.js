import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header';
import Container from './container';
import Footer from './footer';

export default function App(props) {
    return (
        <Router>
            <Header />
            <Container />
            <Footer />
        </Router>
    )
}