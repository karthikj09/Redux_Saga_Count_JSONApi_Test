import { DECREMENT, INCREMENT } from "./actionType";

const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return { ...state, count: state.count + 1 };
        }
        case DECREMENT: {
            if (state.count === 0) {
                return state;
            } else {
                return { ...state, count: state.count - 1 };
            }
        }
        default: return state;
    }
};

export default counterReducer;
