import React from 'react';
import { Link } from 'react-router-dom';

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
    },
    arrowLeftImage: {
        width: '10px',
    }
}

function SubscribersListItem(props) {

    function handleSelectClick(value) {
        props.onClick(value);
    }

    function handleInfoClick(value) {
        alert('handleInfoClick', value);
    }

    return (
        <Link to={`/subscribers/${props.item}`}>
            <li className={`list-group-item d-flex justify-content-between align-items-center mt-2 mb-2 ${props.active && " active "}`} style={styles.item} onClick={() => handleSelectClick(props.item)}>
                <span>{props.item}</span>
            </li>
        </Link>
    )
}

export default function SubscribersSelectList(props) {
    return (
        <>
            { props.list && props.list.length > 0 ?
                <ul className="list-group" style={styles.listWrapper}>
                    {props.list?.map(item =>
                        <SubscribersListItem key={item}
                            item={item}
                            active={props.selectedSubscriber == item}
                            onClick={props.onSelectSubscriber} />
                    )}
                </ul>
                : <div>טוען...</div>
            }
        </>
    )
}