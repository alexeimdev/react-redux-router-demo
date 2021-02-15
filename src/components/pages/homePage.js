import React from 'react';
import {Link} from 'react-router-dom';

export default function HomePage(props) {
    return (
        <div className="container">
            <h1>דף בית</h1>
            <Link to="/subscribers">רשימת מנויים</Link>
        </div>
    )
}