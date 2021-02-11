import React from 'react';
import logoImage from '../../images/logo.png';

export default function Header() {

    const styles = {
        header: {
            boxShadow: '0 3px 3px -3px grey',
            backgroundColor: '#ffffff',
        }
    }

    return (
        <header className="navbar navbar-expand-md navbar-dark bd-navbar sticky-top mb-3" style={styles.header}>
            <nav className="container justify-content-center">
                <img src={logoImage} alt="" />
            </nav>
        </header>
    )
}