import React from 'react';
import Test from '../test/test';

export default function Container(props) {

    const styles = {
        container: {
            minHeight: '50vh',
        },
    }

    return (
        <main className="container" style={styles.container}>
        </main>
    )
}