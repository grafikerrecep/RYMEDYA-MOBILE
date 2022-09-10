import * as ActionTypes from '../actions/actionTypes';

const initalState = {
    orders: [],
};

const orderReducer = (state = initalState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
            };
        default:
            return state;
    }
}

export default orderReducer;