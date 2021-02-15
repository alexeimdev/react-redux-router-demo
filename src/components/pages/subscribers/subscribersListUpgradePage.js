import React, { useEffect } from 'react';
import SubscribersUpgrade from '../../subscribers/subscribersUpgrade';

export default function SubscribersListUpgradePage(props) {

    return (
        <div className="container">
            <h1>איזה מנוי לשדרג?</h1>
            <div>
                <SubscribersUpgrade />
            </div>
        </div>
    )
}