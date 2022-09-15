import * as ActionTypes from './actionTypes';
import {API_URL} from '@env';
import axios from 'axios';

export const getOrders = async () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/api/offer`);
      const data = response.data.data;
      dispatch({
        type: ActionTypes.GET_ORDERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
   
  
};
