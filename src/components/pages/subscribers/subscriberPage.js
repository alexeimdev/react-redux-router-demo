import React from 'react';
import { useParams } from 'react-router-dom';

export default function SubscriberPage(props) {

    const { id } = useParams()

    return (
        <div className="container">
            <h1>Subscriber</h1>
            <h2>{id}</h2>
        </div>
    )
}