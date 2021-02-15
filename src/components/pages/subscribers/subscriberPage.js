import React from 'react';
import { useParams } from 'react-router-dom';

export default function SubscriberPage(props) {

    const { id } = useParams()

    return (
        <div className="container">
            <h1>מנוי נבחר: {id}</h1>
        </div>
    )
}