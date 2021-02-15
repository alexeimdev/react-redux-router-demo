import {
    FETCH_SUBSCRIBERS_LIST,
    FETCH_SUBSCRIBERS_LIST_SUCCESS,
    FETCH_SUBSCRIBERS_LIST_FAILURE,
    SET_SELECTED_SUBSCRIBER,
} from '../constants/subscribersActionTypes';

const getSubscribersList = () => {
    return (dispatch) => {
        
        dispatch(fetchSubscriberList());

        try {
            setTimeout(() => {
                const list = ['050-1111111', '050-2222222', '050-3333333', '050-4444444', '050-5555555'];
                dispatch(fetchSubscriberListSuccess(list));
            }, 1000);
        }
        catch(ex) {
            dispatch(fetchSubscriberListFailure());
        }
    }
}

const fetchSubscriberList = () => {
    return { type: FETCH_SUBSCRIBERS_LIST };
}

const fetchSubscriberListSuccess = (list) => {
    return {
        type: FETCH_SUBSCRIBERS_LIST_SUCCESS,
        payload: {
            list,
        }
    };
}

const fetchSubscriberListFailure = () => {
    return { type: FETCH_SUBSCRIBERS_LIST_FAILURE };
}

const setSelectedSubscriber = (subscriber) => {
    return {
        type: SET_SELECTED_SUBSCRIBER,
        payload: {
            subscriber,
        }
    };
}


export {
    getSubscribersList,
    setSelectedSubscriber,
}