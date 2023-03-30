import axios from 'axios';

export const getFiendsList = (url) => {
    const response = axios.get(url)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
    const data = response.json();
    return data;
}