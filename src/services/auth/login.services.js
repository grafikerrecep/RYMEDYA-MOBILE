import {API_URL} from '@env';
import axios from 'axios';

console.log(API_URL);
export const login = (name, phone) => {
  axios
    .post(`${API_URL}/login`, {
      name: name,
      phone: phone,
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};
