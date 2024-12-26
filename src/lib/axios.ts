import axios from 'axios';

const API_URL = 'http://localhost:3333';
// const API_URL = 'http://';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
