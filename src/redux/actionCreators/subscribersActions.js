import {
    FETCH_SUBSCRIBERS_LIST,
    FETCH_SUBSCRIBERS_LIST_SUCCESS,
    FETCH_SUBSCRIBERS_LIST_FAILURE,
} from '../constants/subscribresActionTypes';

const getSubscribersList = (value) => {
    return (dispacth) => {
        dispacth(fetchSubscriberList());
        
        setTimeout(() => {
            const list = ['050-1111111', '050-2222222', '050-3333333', '050-4444444', '050-5555555'];
            dispacth(fetchSubscriberListSuccess(list))
        }, 1000)
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

export {
    getSubscribersList,
}