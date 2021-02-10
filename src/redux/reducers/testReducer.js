import { TEST } from '../constants/testActionTypes';

const initialState = {
    value: "",
}

export default function testReducer(state = initialState, action) {
    switch (action.type) {
        case TEST:
            return {
                ...state,
                value: action.payload.value,
            }
        default: return state;
    }
}