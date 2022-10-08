import {API_URL} from '@env';
import axios from 'axios';

export const getOrders = setOrders => {
  axios.get(`${API_URL}/api/offer`).then(res => {
    setOrders(res.data.data);
  });
};

export const getOrder = (id, setOrder) => {
  axios.get(`${API_URL}/api/offer/${id}`).then(res => {
    setOrder(res.data.data);
  });
};


export const acceptOrder = (order, setOrder, setOrders) => {
  axios
    .put(`${API_URL}/api/offer/${order.id}`, {
      status: 'accepted',
    })
    .then(res => {
      setOrder(res.data.data);
      getOrders(setOrders);
    });
}

export const rejectOrder = (order, setOrder, setOrders) => {
  axios
    .put(`${API_URL}/api/offer/${order.id}`, order)
    .then(res => {
      console.log(res.data);
      setOrder(res.data);
      getOrders(setOrders);
    })
    .catch(err => {
      console.log(err);
    });
};
