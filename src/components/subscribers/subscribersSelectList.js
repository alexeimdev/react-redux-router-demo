import React from 'react';

function SubscribersListItem(props) {

    function handleSelectClick() {

    }

    function handleInfoClick() {

    }

    return (
        <div className="card mt-3 col-12 col-md-8">
            <div className="card-body">
                <h5 className="card-title">{props.item}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <a href="#" className="card-link">Card link</a>
            </div>
        </div>
    )
}

export default function SubscribersSelectList(props) {
    return (
        <div className="row d-flex justify-content-center">
            {props.list?.map(item => <SubscribersListItem key={item} item={item} />)}
        </div>
    )
}