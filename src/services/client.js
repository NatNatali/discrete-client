import axios from 'axios';

const token = localStorage.getItem('user');
const url = 'http://localhost:3030';

const authToken = token ? 'Bearer ' + token : undefined;
const headers = {
  Authorization: authToken,
  Accept: 'application/x.l2w.v1+json'
};
const client = axios.create({
  baseURL: url,
  headers,
});

export default client;
