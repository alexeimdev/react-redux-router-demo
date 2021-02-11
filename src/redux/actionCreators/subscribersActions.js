import {
    FETCH_SUBSCRIBERS_LIST,
    FETCH_SUBSCRIBERS_LIST_SUCCESS,
    FETCH_SUBSCRIBERS_LIST_FAILURE,
} from '../constants/subscribresActionTypes';

const getSubscribersList = (value) => {
    return (dispacth) => {
        dispacth(fetchSubscriberList());
        const list = ['0501111111', '0502222222', '0503333333', '0504444444', '0505555555'];
        dispacth(fetchSubscriberListSuccess(list))
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