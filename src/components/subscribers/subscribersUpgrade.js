import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSubscribersList, setSelectedSubscriber } from '../../redux/actionCreators/subscribersActions';
import SubscribersSelectList from './subscribersSelectList';

function SubscribersUpgrade(props) {

    useEffect(() => {
        props.actions.getSubscribersList();
    }, [])


    function handleSelectSubscriber(subscriber) {
        props.actions.setSelectedSubscriber(subscriber);
    }


    return (
        <div className="container">
            <div>
                <SubscribersSelectList 
                    list={props.subscriberList}
                    selectedSubscriber={props.selectedSubscriber}
                    onSelectSubscriber={handleSelectSubscriber} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        subscriberList: state.subscribers?.list ?? [],
        selectedSubscriber: state.subscribers?.selectedSubscriber,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            getSubscribersList,
            setSelectedSubscriber,
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscribersUpgrade)