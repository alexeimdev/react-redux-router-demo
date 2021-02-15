import React from 'react';
import { Link } from 'react-router-dom';
import ArrowLeftImage from "../../images/arrow-left.png";

const styles = {
    listWrapper: {
        backgroundColor: '#f5f5f5',
        borderRadius: '25px',
        padding: '10px',
    },
    item: {
        cursor: 'pointer',
        lineHeight: 4,
        borderTopWidth: 0,
        borderRadius: '15px',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        color: '#565656',
    },
    arrowLeftImage: {
        width: '10px',
    }
}


function SubscribersListItem(props) {

    function handleSelectClick(value) {
        alert('handleSelectClick ' + value);
    }

    function handleInfoClick(value) {
        alert('handleInfoClick', value);
    }

    return (
        <Link to={`/subscriber/${props.item}`}>
            <li className="list-group-item d-flex justify-content-between align-items-center mt-2 mb-2" style={styles.item} onClick={() => handleSelectClick(props.item)}>
                <span>{props.item}</span>
                <img src={ArrowLeftImage} style={styles.arrowLeftImage} />
            </li>
        </Link>

    )
}

export default function SubscribersSelectList(props) {
    return (
        <ul className="list-group" style={styles.listWrapper}>
            {props.list?.map(item => <SubscribersListItem key={item} item={item} />)}
        </ul>
    )
}