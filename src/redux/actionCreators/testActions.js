import { TEST } from '../constants/testActionTypes';

const test = (value) => {
    return {
        type: TEST,
        payload: {
            value,
        }
    }
}

export {
    test,
}