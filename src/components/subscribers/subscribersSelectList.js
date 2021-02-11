import React from 'react';

function SubscribersListItem(props) {

    const styles = {
        item: {
            cursor: 'pointer',
            onHover: 'backgrondColor: red'
        }
    }

    function handleSelectClick(value) {
        alert('handleSelectClick ' + value);
    }

    function handleInfoClick(value) {
        alert('handleInfoClick', value);
    }

    return (
        <div className="card shadow-sm bg-color-red mt-3 col-12 col-md-8"
            style={styles.item}
            onClick={() => handleSelectClick(props.item)}>
            <div className="card-body">
                <h5 className="card-title">{props.item}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
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