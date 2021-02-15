import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import AboutPage from '../pages/aboutPage';
import NotFoundPage from '../pages/notFoundPage';
import SubscriberPage from '../pages/subscribers/subscriberPage';
import SubscriberListUpgradePage from '../pages/subscribers/subscriberListUpgradePage';

export default function Container(props) {

    const styles = {
        container: {
            minHeight: '50vh',
        },
    }

    return (
        <main className="container" style={styles.container}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route exact path="/subscribers" component={SubscriberListUpgradePage} />
                <Route path="/subscribers/:id" component={SubscriberPage} />
                
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </main>
    )
}