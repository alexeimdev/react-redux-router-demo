import React from 'react';

export default function Footer() {

    return (
        <footer className="container mt-5 pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
                <div className="col-12">
                    <h5>קישורים</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary" href="#">דף הבית</a></li>
                        <li><a className="link-secondary" href="#">אודות</a></li>
                        <li><a className="link-secondary" href="#">מכר</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}