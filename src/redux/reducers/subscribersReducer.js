import {
    FETCH_SUBSCRIBERS_LIST,
    FETCH_SUBSCRIBERS_LIST_SUCCESS,
    FETCH_SUBSCRIBERS_LIST_FAILURE,
    SET_SELECTED_SUBSCRIBER,
} from '../constants/subscribersActionTypes';

const initialState = {
    list: [],
}

export default function subscribersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SUBSCRIBERS_LIST:
            return {
                ...state,
                fetchSubscriberListStatus: 'PENDING',
            }
        case FETCH_SUBSCRIBERS_LIST_SUCCESS:
            return {
                ...state,
                fetchSubscriberListStatus: 'SUCCESS',
                list: action.payload.list,
            }
        case FETCH_SUBSCRIBERS_LIST_FAILURE:
            return {
                ...state,
                fetchSubscriberListStatus: 'FAILURE',
            }
        case SET_SELECTED_SUBSCRIBER:
                return {
                    ...state,
                    selectedSubscriber: action.payload.subscriber,
                }
        default: return state;
    }
}