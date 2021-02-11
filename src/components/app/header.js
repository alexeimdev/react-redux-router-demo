import React from 'react';
import logoImage from '../../images/logo.png';

export default function Header() {

    const styles = {
        header: {
            backgroundColor: '#f8f9fa',
        }
    }

    return (
        <header className="navbar navbar-expand-md navbar-dark bd-navbar sticky-top" style={styles.header}>
            <nav className="container justify-content-center">
                <img src={logoImage} alt="" />
            </nav>
        </header>
    )
}