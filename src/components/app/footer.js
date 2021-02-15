import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {

    return (
        <footer className="container mt-5 pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
                <div className="col-12">
                    <h5>קישורים</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link to="/" className="link-secondary">דף הבית</Link></li>
                        <li><Link to="/subscribers" className="link-secondary">מכר</Link></li>
                        <li><Link to="/about" className="link-secondary">אודות</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}