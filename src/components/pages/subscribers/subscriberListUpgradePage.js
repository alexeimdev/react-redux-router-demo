import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSubscribersList } from '../../../redux/actionCreators/subscribersActions';
import SubscribersSelectList from '../../subscribers/subscribersSelectList';

function SubscriberListUpgradePage(props) {

    useEffect(() => {
        props.actions.getSubscribersList();
    }, [])

    return (
        <div className="container">
            <h1>איזה מנוי לשדרג?</h1>
            <div><SubscribersSelectList list={props.subscriberList} /></div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('state', state)
    return {
        subscriberList: state.subscribers?.list ?? [],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            getSubscribersList,
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscriberListUpgradePage)