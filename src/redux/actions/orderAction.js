import * as ActionTypes from './actionTypes';

export const getOrders = () => ({
  type: ActionTypes.GET_ORDERS,
  payload: [
    {
      id: 1,
      name: 'Order 1',
    },
    {
      id: 2,
      name: 'Order 2',
    },
  ],
});
