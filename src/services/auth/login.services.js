import {API_URL} from '@env';
import axios from 'axios';

console.log(API_URL);
export const login = (name, phone) => {
   var response = axios
    .post(`${API_URL}/login`, {
      name: name,
      phone: phone,
    })
    .then(response => {
      return response.data;
    });
    return response;
};
