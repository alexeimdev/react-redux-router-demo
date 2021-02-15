import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SubscriberListUpgradePage from '../pages/subscriberListUpgradePage';

export default function Container(props) {

    const styles = {
        container: {
            minHeight: '50vh',
        },
    }

    return (
        <main className="container" style={styles.container}>
            <Switch>
                <Route path="/">
                    <SubscriberListUpgradePage />
                </Route>
                <Route path="/subscriber/:id">
                    <h1>subscriber</h1>
                </Route>
            </Switch>
        </main>
    )
}