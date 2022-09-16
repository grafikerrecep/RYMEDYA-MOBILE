import {API_URL} from '@env';
import axios from 'axios';


export const getOrders = setOrders => {
  axios.get(`${API_URL}/api/offer`).then(res => {
    console.log(res.data);
    setOrders(res.data.data);
  });
};

export const getOrder = (id, setOrder) => {
  axios.get(`${API_URL}/api/offer/${id}`).then(res => {
    console.log(res.data);
    setOrder(res.data.data);
  });
}
